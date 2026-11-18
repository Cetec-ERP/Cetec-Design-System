import { expect, within } from 'storybook/test';

import { Grid, VStack } from '@styled-system/jsx';

import { printFixture } from '~/print/printFixtureFiles';
import { type PrintFixture } from '~/print/printFixtures';
import {
  PrintFixtureMarkup,
  PrintFixtureSpec,
  PrintFixtureView,
} from '~/storybook/print/PrintFixture';

import { Box } from '../Box';
import { Heading } from '../Heading';

import { pageSizes } from './pageSizes';
import { PrintPage } from './PrintPage';
import { PrintPreview } from './PrintPreview';

import type { Meta, StoryObj } from '@storybook/react-vite';

const breakMarkup = printFixture('printPageBreak', 'break').html;
const betweenLines = printFixture('printPageBreak', 'between-lines');

/**
 * Splits a fixture into pages at each page break, the way the printer does.
 * The break itself takes no space in print, so it is left out of the pages.
 */
const printedPages = (fixture: PrintFixture): PrintFixture[] =>
  fixture.html.split(breakMarkup).map((html, i) => ({
    ...fixture,
    name: `${fixture.name}-page-${i + 1}`,
    html,
  }));

/** A short label stock page, so both printed pages fit in the preview. */
const page = pageSizes.label4x3;

/** A fixed scale, so the two printed pages show one above the other. */
const scale = 0.8;

/** Returns true when a print media rule hides the selector. */
const hiddenInPrint = (selector: string) =>
  [...document.styleSheets].some((sheet) => {
    const scan = (rules: CSSRuleList): boolean =>
      [...rules].some((rule) => {
        if (rule instanceof CSSMediaRule && rule.media.mediaText === 'print') {
          return [...rule.cssRules].some(
            (inner) =>
              inner instanceof CSSStyleRule &&
              inner.selectorText === selector &&
              inner.style.display === 'none',
          );
        }
        return 'cssRules' in rule
          ? scan((rule as CSSGroupingRule).cssRules)
          : false;
      });
    try {
      return scan(sheet.cssRules);
    } catch {
      return false;
    }
  });

/**
 * A page break, the `printPageBreak` slot recipe, for the kit element
 * `page_break`. It has no props and no React component. The Go print helper
 * writes the markup from the fixtures.
 *
 * In print, it starts a new page and takes no space. On screen, such as the
 * editor preview, it shows a dashed line and a "Page break" label. Go writes
 * the label text. The kit checker does not allow a page break inside a table
 * or totals.
 *
 * Each story renders fixtures from `src/recipes/printPageBreak.fixtures.json`.
 * A preview cannot print, so the printed pages are the fixture split at the
 * break, as the printer splits it.
 */
const meta = {
  title: 'Print/Page break',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'printPageBreak',
    fixture: betweenLines,
    size: page,
    margins: 0.25,
    h: 'xl',
  },
  argTypes: {
    fixture: { control: false },
    size: { control: false },
    footer: { control: false },
  },
} satisfies Meta<typeof PrintFixtureSpec>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Fixture `between-lines`: one order line per page. Printed, it is two pages.
 * On screen, it is one flow with the break marked.
 */
export const BetweenLines: Story = {
  render: ({ thermal }) => (
    <Grid columns={{ base: 1, lg: 2 }} gap="16" p="24">
      <VStack alignItems="stretch" gap="8">
        <Heading level="h3">Printed: two pages</Heading>
        <Box h="xl">
          <PrintPreview fit={scale} aria-label="Printed pages">
            {printedPages(betweenLines).map((part) => (
              <PrintPage key={part.name} size={page} margins={0.25}>
                <PrintFixtureMarkup fixture={part} thermal={thermal} />
              </PrintPage>
            ))}
          </PrintPreview>
        </Box>
      </VStack>
      <VStack alignItems="stretch" gap="8">
        <Heading level="h3">On screen: the editor preview</Heading>
        <PrintFixtureView
          fixture={betweenLines}
          thermal={thermal}
          size={page}
          margins={0.25}
          fit={scale}
          h="xl"
          label="Screen preview"
        />
      </VStack>
    </Grid>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const printed = within(await canvas.findByLabelText('Printed pages'));
    const first = canvasElement.querySelector(
      '[data-fixture="between-lines-page-1"]',
    );
    const second = canvasElement.querySelector(
      '[data-fixture="between-lines-page-2"]',
    );
    await expect(first?.textContent).toContain('PCB-ASSY-2041');
    await expect(first?.textContent).not.toContain('CBL-0880');
    await expect(second?.textContent).toContain('CBL-0880');
    await expect(printed.queryByText('Page break')).toBeNull();

    const screen = within(await canvas.findByLabelText('Screen preview'));
    const label = await screen.findByText('Page break');
    const root = label.parentElement as HTMLElement;
    await expect(getComputedStyle(root).breakAfter).toBe('page');
    await expect(getComputedStyle(root).borderTopStyle).toBe('dashed');
    // In print, the label and the line do not show.
    await expect(hiddenInPrint('.cetec-printPageBreak__label')).toBe(true);
  },
};

/** Fixture `between-lines` in thermal ink. The marker is black. */
export const Thermal: Story = {
  ...BetweenLines,
  args: {
    thermal: true,
  },
  play: async ({ canvasElement }) => {
    const screen = within(
      await within(canvasElement).findByLabelText('Screen preview'),
    );
    const label = await screen.findByText('Page break');
    await expect(getComputedStyle(label).color).toBe('rgb(0, 0, 0)');
    await expect(
      getComputedStyle(label.parentElement as HTMLElement).borderTopColor,
    ).toBe('rgb(0, 0, 0)');
  },
};

/** Fixture `break`: the page break alone, with its input and markup. */
export const Markup: Story = {
  args: {
    fixture: printFixture('printPageBreak', 'break'),
    h: 'md',
  },
};
