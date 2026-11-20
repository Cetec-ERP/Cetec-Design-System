import { expect } from 'storybook/test';

import { styled } from '@styled-system/jsx';

import { Box } from '~/components/Box';
import { printFixture } from '~/print/printFixtureFiles';
import { type PrintFixture } from '~/print/printFixtures';
import { PrintFixtureSpec } from '~/storybook/print/PrintFixture';
import { fixtureHtmlClasses } from '~/storybook/print/printStory';

import { PrintPage } from './PrintPage';
import { PrintPreview } from './PrintPreview';
import { usePrintPage } from './usePrintPage';

import type { Meta, StoryObj } from '@storybook/react-vite';

/** The computed style of each part that matches in a fixture story. */
const styles = (canvasElement: HTMLElement, fixture: string, part: string) =>
  [
    ...canvasElement.querySelectorAll(
      `[data-fixture="${fixture}"] .cetec-keyFact__${part}`,
    ),
  ].map((element) => getComputedStyle(element));

/** Two 8.5 × 5.5 in pages side by side, with 0.5 in margins. */
const twoPages = { width: 17, height: 5.5, margin: 0.5 } as const;

/**
 * Two pages side by side. The fixture flows from the first page into the
 * second, as a browser splits a printed document into pages. Each column of
 * the body is one page, so `break-inside: avoid` works as it does on paper.
 */
const TwoPagesMarkup = ({ fixture }: { fixture: PrintFixture }) => {
  const { margins } = usePrintPage();
  // Margins are runtime page values, so they pass through as a style.
  const bodyPadding = {
    paddingTop: margins.top,
    paddingRight: margins.right,
    paddingBottom: margins.bottom,
    paddingLeft: margins.left,
  };
  // Columns fill in order only with a fixed height: one page of content.
  const pageContent = {
    height: `${twoPages.height - 2 * twoPages.margin}in`,
  };
  return (
    <styled.div
      className={fixtureHtmlClasses(fixture).join(' ')}
      data-fixture={fixture.name}
      style={bodyPadding}
    >
      <styled.div
        data-fixture-body=""
        style={pageContent}
        columnCount={2}
        columnFill="auto"
        // 1 in: the right margin of page 1 and the left margin of page 2.
        columnGap="96"
        columnRuleStyle="dashed"
        columnRuleWidth="1"
        columnRuleColor="border"
        // Fixture HTML is repository content, written to match the Go helper.
        dangerouslySetInnerHTML={{ __html: fixture.html }}
      />
    </styled.div>
  );
};

/**
 * Totals, the `printTotals` recipe, for the kit element `totals`. It prints the
 * money stack once, after the last line. It has no React component. The Go
 * print helper writes the classes from the fixtures.
 *
 * Each row is a KeyFact in the `aligned` layout. Labels and values align
 * right, in two columns, at most 3.4 in wide. Values use tabular figures and
 * never wrap. A total row prints large in full ink with a hairline above it.
 * A danger row prints in the alert ink. The stack is kept together on one
 * page. Each story renders one fixture from `src/recipes/printTotals.fixtures.json`
 * on a Letter page.
 */
const meta = {
  title: 'Print/Totals',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'printTotals',
    fixture: printFixture('printTotals', 'usd'),
    paper: 'letter',
    fit: 'width',
    h: 'lg',
  },
  argTypes: {
    paper: {
      control: 'inline-radio',
      options: ['letter', 'a4', 'legal'],
    },
    fixture: { control: false },
    size: { control: false },
    footer: { control: false },
  },
} satisfies Meta<typeof PrintFixtureSpec>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Fixture `usd`: a USD invoice with freight and tax. The balance due is the
 * total row.
 */
export const Usd: Story = {
  name: 'USD',
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector(
      '[data-fixture="usd"] .cetec-printTotals',
    ) as HTMLElement;
    // sizes.totalsWidth is 3.4 in, which is 326.4 px before the preview scale.
    await expect(root.offsetWidth).toBe(326);
    await expect(getComputedStyle(root).breakInside).toBe('avoid');
    const values = styles(canvasElement, 'usd', 'value');
    const rights = values.map((style) => style.justifyContent);
    await expect(new Set(rights)).toEqual(new Set(['flex-end']));
    const texts = styles(canvasElement, 'usd', 'text');
    await expect(texts.map((style) => style.whiteSpace)).toEqual(
      Array(5).fill('nowrap'),
    );
    await expect(texts[0]?.fontVariantNumeric).toBe('tabular-nums');
    const labels = styles(canvasElement, 'usd', 'label');
    await expect(labels[4]?.borderTopStyle).toBe('solid');
    await expect(labels[3]?.borderTopStyle).toBe('none');
    // print.total is 14 pt, which is 18.67 px.
    await expect(values[4]?.fontSize).toBe('18.6667px');
  },
};

/**
 * Fixture `german-retainage`: the German document format, with retainage
 * after the total in the alert ink.
 */
export const GermanRetainage: Story = {
  args: { fixture: printFixture('printTotals', 'german-retainage') },
  play: async ({ canvasElement }) => {
    const labels = styles(canvasElement, 'german-retainage', 'label');
    const texts = styles(canvasElement, 'german-retainage', 'text');
    // paper.inkAlert is red.50.
    await expect(labels[3]?.color).toBe(texts[3]?.color);
    await expect(texts[3]?.color).not.toBe(texts[2]?.color);
  },
};

/** Fixture `check-stub`: one total row, as a check remittance stub prints it. */
export const CheckStub: Story = {
  args: { fixture: printFixture('printTotals', 'check-stub') },
};

/**
 * Fixture `german-retainage` in thermal ink. Every ink prints black, the
 * retainage too.
 */
export const GermanRetainageThermal: Story = {
  args: {
    fixture: printFixture('printTotals', 'german-retainage'),
    thermal: true,
  },
  play: async ({ canvasElement }) => {
    const texts = styles(canvasElement, 'german-retainage', 'text');
    await expect(new Set(texts.map((style) => style.color))).toEqual(
      new Set(['rgb(0, 0, 0)']),
    );
  },
};

/**
 * Fixture `next-page` on two pages, each 8.5 × 5.5 in, side by side. The
 * content fills most of page 1. The totals do not fit, so they move whole to
 * the top of page 2. The dashed line is the page edge.
 */
export const MovesToNextPage: Story = {
  args: { fixture: printFixture('printTotals', 'next-page') },
  render: ({ fixture }) => (
    <Box h="lg">
      <PrintPreview fit="width" aria-label={fixture.name}>
        <PrintPage
          size={{ width: twoPages.width, height: twoPages.height, unit: 'in' }}
          margins={twoPages.margin}
        >
          <TwoPagesMarkup fixture={fixture} />
        </PrintPage>
      </PrintPreview>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const body = canvasElement.querySelector(
      '[data-fixture="next-page"] [data-fixture-body]',
    ) as HTMLElement;
    const totals = body.querySelector('.cetec-printTotals') as HTMLElement;
    const lines = body.querySelectorAll('p');
    const last = lines[lines.length - 1] as HTMLElement;
    const page = body.getBoundingClientRect();
    const box = totals.getBoundingClientRect();
    // Every line is on page 1. The totals start at the top of page 2.
    await expect(last.getBoundingClientRect().right).toBeLessThan(
      page.left + page.width / 2,
    );
    await expect(box.left).toBeGreaterThan(page.left + page.width / 2);
    await expect(box.top - page.top).toBeLessThan(page.height / 10);
  },
};
