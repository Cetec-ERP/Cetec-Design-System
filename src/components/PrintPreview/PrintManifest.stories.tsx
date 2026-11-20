import { type ReactNode } from 'react';

import { expect, within } from 'storybook/test';

import { VStack } from '@styled-system/jsx';

import { printFixtureFiles } from '~/print/printFixtureFiles';
import {
  checkPrintFixtures,
  fixtureCheckProblems,
  type PrintFixtureFile,
} from '~/print/printFixtures';
import {
  buildPrintManifest,
  manifestClasses,
  type PrintVariantClasses,
} from '~/print/printManifest';
import { printRecipeNames } from '~/print/printRecipes';

import { Box } from '../Box';
import { Code } from '../Code';
import { CodeBlock } from '../CodeBlock';
import { Heading } from '../Heading';
import { Text } from '../Text';

import type { Meta, StoryObj } from '@storybook/react-vite';

const manifest = buildPrintManifest();

/** A simple table for the manifest. */
const SpecTable = ({
  caption,
  headers,
  children,
}: {
  caption: string;
  headers: string[];
  children: ReactNode;
}) => (
  <Box as="table" w="full" borderCollapse="collapse" textStyle="body.sm">
    <Box as="caption" textAlign="left" pb="8">
      <Heading level="h3">{caption}</Heading>
    </Box>
    <thead>
      <tr>
        {headers.map((header) => (
          <Box
            as="th"
            key={header}
            textAlign="left"
            fontWeight="bold"
            px="8"
            py="6"
            borderBottomWidth="2"
            borderBottomStyle="solid"
            borderColor="border"
          >
            {header}
          </Box>
        ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </Box>
);

const Cell = ({ children }: { children?: ReactNode }) => (
  <Box
    as="td"
    px="8"
    py="6"
    verticalAlign="top"
    borderBottomWidth="1"
    borderBottomStyle="solid"
    borderColor="border"
  >
    {children}
  </Box>
);

/** An empty cell value. */
const None = () => (
  <Box as="span" color="text.subtle">
    None
  </Box>
);

/** Variant classes as one line per value. */
const VariantList = ({ variants }: { variants?: PrintVariantClasses }) => {
  const rows = Object.entries(variants ?? {}).flatMap(([variant, values]) =>
    Object.entries(values).map(([value, className]) => ({
      key: `${variant}=${value}`,
      className,
    })),
  );
  if (rows.length === 0) return <None />;
  return (
    <VStack alignItems="flex-start" gap="2">
      {rows.map((row) => (
        <Box key={row.key}>
          {row.key}: <Code>{row.className}</Code>
        </Box>
      ))}
    </VStack>
  );
};

const RootTable = () => (
  <SpecTable caption="Root classes" headers={['Name', 'Class', 'On', 'Use']}>
    {Object.entries(manifest.roots).map(([name, root]) => (
      <tr key={name}>
        <Cell>{name}</Cell>
        <Cell>
          <Code>{root.className}</Code>
        </Cell>
        <Cell>
          <Code>{`<${root.element}>`}</Code>
        </Cell>
        <Cell>{root.description}</Cell>
      </tr>
    ))}
  </SpecTable>
);

const RecipeTable = () => (
  <SpecTable
    caption="Recipes"
    headers={['Recipe', 'Slot', 'Class', 'Variants', 'Defaults', 'Fixtures']}
  >
    {Object.entries(manifest.recipes).flatMap(([name, recipe]) => {
      const defaults =
        Object.entries(recipe.defaultVariants)
          .map(([variant, value]) => `${variant}=${value}`)
          .join(', ') || 'None';
      if (recipe.kind === 'recipe') {
        return [
          <tr key={name}>
            <Cell>{name}</Cell>
            <Cell>
              <None />
            </Cell>
            <Cell>
              <Code>{recipe.className}</Code>
            </Cell>
            <Cell>
              <VariantList variants={recipe.variants} />
            </Cell>
            <Cell>{defaults}</Cell>
            <Cell>
              <Code>{recipe.fixtures}</Code>
            </Cell>
          </tr>,
        ];
      }
      return Object.entries(recipe.slots ?? {}).map(([slot, classes]) => (
        <tr key={`${name}.${slot}`}>
          <Cell>{name}</Cell>
          <Cell>{slot}</Cell>
          <Cell>
            <Code>{classes.className}</Code>
          </Cell>
          <Cell>
            <VariantList variants={classes.variants} />
          </Cell>
          <Cell>{defaults}</Cell>
          <Cell>
            <Code>{recipe.fixtures}</Code>
          </Cell>
        </tr>
      ));
    })}
  </SpecTable>
);

const FooterTable = () => {
  const { declarations, literal, literalThermal } = manifest.pageFooter;
  return (
    <SpecTable
      caption={`Page footer (${manifest.pageFooter.textStyle}, ${manifest.pageFooter.marginBox})`}
      headers={['Property', 'With variables', 'Literal', 'Literal, thermal']}
    >
      {Object.keys(declarations).map((property) => (
        <tr key={property}>
          <Cell>
            <Code>{property}</Code>
          </Cell>
          <Cell>
            <Code>{declarations[property]}</Code>
          </Cell>
          <Cell>
            <Code>{literal[property]}</Code>
          </Cell>
          <Cell>
            <Code>{literalThermal[property]}</Code>
          </Cell>
        </tr>
      ))}
    </SpecTable>
  );
};

/**
 * The class manifest, `print-classes.json`. The Go print helper reads it to
 * write the same classes as the print recipes. The build writes it from the
 * recipe configs and tokens, so it cannot drift from `print.css`.
 *
 * It lists the two root classes for `<html>`, each print recipe with its
 * slots and variant classes, the path of each recipe's fixture file, and the
 * page footer declarations for the `@page` margin box.
 */
const meta = {
  title: 'Print/Class manifest',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** The manifest as tables, then as the JSON the build writes. */
export const Manifest: Story = {
  render: () => (
    <VStack alignItems="stretch" gap="32" maxW="6xl">
      <Text>
        Go links <Code>{manifest.stylesheet}</Code> in every kit document and
        reads these classes from <Code>print-classes.json</Code>.
      </Text>
      <RootTable />
      <RecipeTable />
      <FooterTable />
      <CodeBlock
        title="print-classes.json"
        language="json"
        code={JSON.stringify(manifest, null, 2)}
        maxLines={24}
      />
    </VStack>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      await canvas.findByRole('table', { name: 'Root classes' }),
    ).toBeVisible();
    await expect(manifest.roots.printDoc.className).toBe('cetec-printDoc');
    await expect(manifest.roots.thermal.className).toBe('cetec-ink-thermal');
    await expect(Object.keys(manifest.recipes)).toEqual([...printRecipeNames]);
  },
};

/** Collects every selector in the loaded style sheets, in every layer. */
const loadedSelectors = (): string => {
  const selectors: string[] = [];
  const walk = (rules: CSSRuleList) => {
    for (const rule of Array.from(rules)) {
      if (rule instanceof CSSStyleRule) selectors.push(rule.selectorText);
      if ('cssRules' in rule) walk((rule as CSSGroupingRule).cssRules);
    }
  };
  for (const sheet of Array.from(document.styleSheets)) {
    try {
      walk(sheet.cssRules);
    } catch {
      // A cross-origin sheet cannot be read. It holds no design-system CSS.
    }
  }
  return selectors.join('\n');
};

const fixtureCheck = () =>
  fixtureCheckProblems(
    checkPrintFixtures(
      printRecipeNames,
      manifestClasses(manifest),
      printFixtureFiles,
    ),
  );

/**
 * The fixture check. It fails when a print recipe has no fixture, when a
 * fixture uses a class that is not in the manifest, or when two fixtures in
 * one file share a name. The build runs the same check before it writes
 * `print-classes.json`.
 */
export const FixtureCheck: Story = {
  render: () => {
    const problems = fixtureCheck();
    return (
      <VStack alignItems="stretch" gap="16" maxW="4xl">
        <Heading level="h3">Fixture check</Heading>
        {problems.length === 0 ? (
          <Text>
            Every print recipe has a fixture, and every fixture class is in the
            manifest.
          </Text>
        ) : (
          <VStack as="ul" alignItems="stretch" gap="4">
            {problems.map((problem) => (
              <Text as="li" key={problem} color="text.danger">
                {problem}
              </Text>
            ))}
          </VStack>
        )}
        <SpecTable caption="Fixtures" headers={['Recipe', 'Fixture', 'Use']}>
          {printFixtureFiles.flatMap((file) =>
            file.fixtures.map((fixture) => (
              <tr key={`${file.recipe}/${fixture.name}`}>
                <Cell>{file.recipe}</Cell>
                <Cell>
                  <Code whiteSpace="nowrap">{fixture.name}</Code>
                </Cell>
                <Cell>{fixture.description}</Cell>
              </tr>
            )),
          )}
        </SpecTable>
      </VStack>
    );
  },
  play: async ({ step }) => {
    await step('Real fixtures pass', async () => {
      await expect(fixtureCheck()).toEqual([]);
    });

    await step('Every manifest class has a CSS rule', async () => {
      const selectors = loadedSelectors();
      for (const className of manifestClasses(manifest)) {
        await expect(selectors).toContain(`.${className}`);
      }
    });

    await step('A recipe with no fixture fails', async () => {
      const check = checkPrintFixtures(
        [...printRecipeNames, 'noFixture'],
        manifestClasses(manifest),
        printFixtureFiles,
      );
      await expect(check.missingFixtures).toEqual(['noFixture']);
    });

    await step('A class that is not in the manifest fails', async () => {
      const stray: PrintFixtureFile = {
        recipe: 'printDoc',
        fixtures: [
          {
            name: 'stray-class',
            description: 'Uses a class the manifest does not list.',
            input: {},
            html: '<p class="cetec-notInManifest">Text</p>',
          },
        ],
      };
      const check = checkPrintFixtures(
        printRecipeNames,
        manifestClasses(manifest),
        [stray],
      );
      await expect(check.unknownClasses).toEqual([
        {
          recipe: 'printDoc',
          fixture: 'stray-class',
          className: 'cetec-notInManifest',
        },
      ]);
    });
  },
};
