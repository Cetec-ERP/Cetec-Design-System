import { type ReactNode } from 'react';

import { expect, within } from 'storybook/test';

import { Grid, VStack } from '@styled-system/jsx';
import { token } from '@styled-system/tokens';

import { printFixture } from '~/print/printFixtureFiles';
import { type PrintFixture } from '~/print/printFixtures';
import {
  PrintFixtureSpec,
  PrintFixtureView,
} from '~/storybook/print/PrintFixture';

import { Box } from '../Box';
import { Code } from '../Code';
import { Heading } from '../Heading';
import { type PageSize } from '../PrintPreview/pageSizes';

import { Tag, type TagProps } from './Tag';

import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * The kit tones and the hue the Go print helper maps each one to. Every tone
 * uses the default variant. The fixture for each tone must agree with this
 * table, and the `Tones` story checks that it does.
 */
const kitTones: {
  tone: string;
  hue: NonNullable<TagProps['hue']>;
  text: string;
}[] = [
  { tone: 'neutral', hue: 'slate', text: 'Draft' },
  { tone: 'info', hue: 'blue', text: 'Revised' },
  { tone: 'success', hue: 'green', text: 'Approved' },
  { tone: 'warning', hue: 'orange', text: 'On hold' },
  { tone: 'danger', hue: 'red', text: 'Expedite' },
];

const toneFixtures = kitTones.map(({ tone }) =>
  printFixture('tag', `tone-${tone}`),
);

/** The five tone fixtures on one line, as one document. */
const allTones: PrintFixture = {
  name: 'tones',
  description: 'Every tone fixture, in order.',
  input: {},
  html: toneFixtures.map((fixture) => fixture.html).join(' '),
};

/** A short strip of paper, long enough for the five tags. */
const strip: PageSize = { width: 4, height: 0.5, unit: 'in' };

const Cell = ({ children }: { children?: ReactNode }) => (
  <Box
    as="td"
    px="8"
    py="6"
    verticalAlign="middle"
    borderBottomWidth="1"
    borderBottomStyle="solid"
    borderColor="border"
  >
    {children}
  </Box>
);

const HeaderCell = ({ children }: { children: ReactNode }) => (
  <Box
    as="th"
    textAlign="left"
    fontWeight="bold"
    px="8"
    py="6"
    borderBottomWidth="2"
    borderBottomStyle="solid"
    borderColor="border"
  >
    {children}
  </Box>
);

const ToneTable = () => (
  <Box as="table" w="full" borderCollapse="collapse" textStyle="body.sm">
    <Box as="caption" textAlign="left" pb="8">
      <Heading level="h3">Kit tones</Heading>
    </Box>
    <thead>
      <tr>
        <HeaderCell>Kit tone</HeaderCell>
        <HeaderCell>Hue</HeaderCell>
        <HeaderCell>Variant</HeaderCell>
        <HeaderCell>On screen</HeaderCell>
        <HeaderCell>Fixture</HeaderCell>
      </tr>
    </thead>
    <tbody>
      {kitTones.map(({ tone, hue, text }) => (
        <tr key={tone}>
          <Cell>
            <Code>{tone}</Code>
          </Cell>
          <Cell>
            <Code>{hue}</Code>
          </Cell>
          <Cell>
            <Code>default</Code>
          </Cell>
          <Cell>
            <Tag hue={hue} data-tone={tone}>
              {text}
            </Tag>
          </Cell>
          <Cell>
            <Code>tag/tone-{tone}</Code>
          </Cell>
        </tr>
      ))}
    </tbody>
  </Box>
);

/** Converts a hex color token to the `rgb()` form computed styles use. */
const rgb = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * The print look of `Tag`. On paper, a tag is an outline in its own ink with
 * no fill, so it survives a browser print with backgrounds off. Thermal label
 * printers print black only, so in thermal ink the text and the outline are
 * black and the words carry the tone.
 *
 * The kit's `tag` element has a `tone`. The Go print helper maps it to a hue
 * and the default variant, as the `Tones` story shows. Each story renders
 * fixtures from `src/recipes/tag.fixtures.json`, exactly as stored.
 *
 * Switch the app theme to dark. The screen tags change. The paper does not.
 */
const meta = {
  title: 'Print/Tag',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'tag',
    fixture: printFixture('tag', 'table-cell'),
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
 * Each kit tone on screen, on paper, and in thermal ink. The paper strips
 * render the five `tone-*` fixtures in order.
 */
export const Tones: Story = {
  render: () => (
    <VStack alignItems="stretch" gap="24" p="24">
      <ToneTable />
      <Grid columns={{ base: 1, lg: 2 }} gap="16">
        <VStack alignItems="stretch" gap="8">
          <Heading level="h3">On paper</Heading>
          <PrintFixtureView
            fixture={allTones}
            size={strip}
            margins={0.125}
            h="2xs"
            label="Tones on paper"
          />
        </VStack>
        <VStack alignItems="stretch" gap="8">
          <Heading level="h3">Thermal ink</Heading>
          <PrintFixtureView
            fixture={allTones}
            thermal
            size={strip}
            margins={0.125}
            h="2xs"
            label="Tones in thermal ink"
          />
        </VStack>
      </Grid>
    </VStack>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // The fixtures and the tone table agree.
    for (const [i, { tone, hue, text }] of kitTones.entries()) {
      const fixture = toneFixtures[i];
      await expect(fixture?.input).toEqual({ tone, text });
      await expect(fixture?.html).toContain(`cetec-tag--hue_${hue}`);
      await expect(fixture?.html).toContain('cetec-tag--variant_default');
    }

    // On screen, a tag has a fill.
    const screenTag = canvasElement.querySelector('[data-tone="danger"]');
    await expect(screenTag).not.toBeNull();
    await expect(getComputedStyle(screenTag as Element).backgroundColor).toBe(
      rgb(token('colors.red.10')),
    );

    // On paper, an outline in the hue's text color, with no fill.
    const paper = within(await canvas.findByLabelText('Tones on paper'));
    const paperTag = getComputedStyle(await paper.findByText('Expedite'));
    await expect(paperTag.backgroundColor).toBe('rgba(0, 0, 0, 0)');
    await expect(paperTag.color).toBe(rgb(token('colors.red.70')));
    await expect(paperTag.borderTopStyle).toBe('solid');
    await expect(paperTag.borderTopColor).toBe(paperTag.color);
    await expect(
      paperTag.getPropertyValue('--cetec-border-widths-paper-hairline').trim(),
    ).toBe('0.5pt');
    // print.smallPrint is 7.5 pt, which is 10 px at 96 px per inch.
    await expect(paperTag.fontSize).toBe('10px');

    // In thermal ink, black text and a black 1.5 pt outline.
    const thermal = within(
      await canvas.findByLabelText('Tones in thermal ink'),
    );
    for (const { text } of kitTones) {
      const style = getComputedStyle(await thermal.findByText(text));
      await expect(style.color).toBe('rgb(0, 0, 0)');
      await expect(style.borderTopColor).toBe('rgb(0, 0, 0)');
    }
    const thermalTag = getComputedStyle(await thermal.findByText('Expedite'));
    await expect(
      thermalTag
        .getPropertyValue('--cetec-border-widths-paper-hairline')
        .trim(),
    ).toBe('1.5pt');
  },
};

/**
 * Fixture `table-cell`: tags in table cells use the `sm` size. On paper,
 * `sm` prints at the 7 pt caps label size with less padding.
 */
export const TableCell: Story = {
  args: {
    fixture: printFixture('tag', 'table-cell'),
    size: { width: 4, height: 1.25, unit: 'in' },
    margins: 0.125,
    h: 'xs',
  },
  play: async ({ canvasElement }) => {
    const page = within(
      await within(canvasElement).findByLabelText('table-cell'),
    );
    const due = await page.findByText('Due');
    await expect(due.className).toContain('cetec-tag--size_sm');
    const style = getComputedStyle(due);
    // print.capsLabel is 7 pt, which is 9.33 px at 96 px per inch.
    await expect(parseFloat(style.fontSize)).toBeCloseTo(9.333, 2);
    await expect(style.backgroundColor).toBe('rgba(0, 0, 0, 0)');
    await expect(style.borderTopStyle).toBe('solid');
  },
};

/** Fixture `table-cell` in thermal ink. Every tag is black. */
export const TableCellThermal: Story = {
  args: {
    ...TableCell.args,
    thermal: true,
  },
  play: async ({ canvasElement }) => {
    const page = within(
      await within(canvasElement).findByLabelText('table-cell'),
    );
    for (const text of ['Due', 'Partially paid', 'Paid']) {
      const style = getComputedStyle(await page.findByText(text));
      await expect(style.color).toBe('rgb(0, 0, 0)');
      await expect(style.borderTopColor).toBe('rgb(0, 0, 0)');
    }
  },
};
