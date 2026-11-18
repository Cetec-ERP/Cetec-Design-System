import { expect, waitFor } from 'storybook/test';

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

/** The first element of a header slot in a fixture story. */
const part = (canvasElement: HTMLElement, fixture: string, slot: string) =>
  canvasElement.querySelector<HTMLElement>(
    `[data-fixture="${fixture}"] .cetec-header__${slot}`,
  );

/** Two 8.5 × 5.5 in pages side by side, with 0.5 in margins. */
const twoPages = { width: 17, height: 5.5, margin: 0.5 } as const;

/**
 * Two pages side by side. The fixture flows from the first page into the
 * second, as a browser splits a printed document into pages. Each column of
 * the body is one page.
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
 * The document header, the `header` recipe, for the kit element `header`.
 * It has no React component. The Go print helper writes the classes from the
 * fixtures.
 *
 * It holds the brand bar, the eyebrow line (kind, number, and status tags),
 * the title, the sub line, and the meta list. The meta list aligns right. Its
 * KeyFacts use the `horizontal` layout, so labels size themselves and end in
 * a colon. The company name always prints: a wordmark logo carries it, a
 * badge logo prints it beside the badge, and with no logo it prints as text.
 * Each story renders one fixture from `src/recipes/header.fixtures.json` on a
 * Letter page.
 */
const meta = {
  title: 'Print/Header',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'header',
    fixture: printFixture('header', 'quote-wordmark'),
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
 * Fixture `quote-wordmark`: a quote with a wordmark logo and a revised tag.
 * The wordmark carries the company name.
 */
export const QuoteWordmark: Story = {
  play: async ({ canvasElement }) => {
    const logo = part(canvasElement, 'quote-wordmark', 'logo');
    await expect(logo?.getAttribute('alt')).toBe('Brightline Electronics');
    await waitFor(() =>
      expect((logo as HTMLImageElement).naturalWidth).toBeGreaterThan(0),
    );
    // sizes.headerWordmark is 28 pt, which is 37.33 px.
    await expect(logo?.offsetHeight).toBe(37);
    await expect(part(canvasElement, 'quote-wordmark', 'companyName')).toBe(
      null,
    );
    const metaList = part(canvasElement, 'quote-wordmark', 'meta');
    const colons = [
      ...(metaList?.querySelectorAll('.cetec-keyFact__labelWithColon') ?? []),
    ].map((label) => getComputedStyle(label).display);
    await expect(colons).toEqual(Array(3).fill('inline'));
    const label = metaList?.querySelector('.cetec-keyFact__label');
    // print.fieldValue is 9.5 pt, which is 12.67 px.
    await expect(getComputedStyle(label as Element).fontSize).toBe('12.6667px');
  },
};

/**
 * Fixture `invoice-badge`: an invoice with a badge logo and a payment status
 * tag. The company name prints beside the badge.
 */
export const InvoiceBadge: Story = {
  args: { fixture: printFixture('header', 'invoice-badge') },
  play: async ({ canvasElement }) => {
    const logo = part(canvasElement, 'invoice-badge', 'logo');
    // sizes.headerBadge is 32 pt, which is 42.67 px.
    await expect(logo?.offsetHeight).toBe(43);
    await expect(
      part(canvasElement, 'invoice-badge', 'companyName')?.textContent,
    ).toBe('Brightline Electronics');
  },
};

/**
 * Fixture `credit-memo-no-logo`: a credit memo with no logo and no title.
 * The company name prints as text.
 */
export const CreditMemoNoLogo: Story = {
  args: { fixture: printFixture('header', 'credit-memo-no-logo') },
  play: async ({ canvasElement }) => {
    await expect(part(canvasElement, 'credit-memo-no-logo', 'logo')).toBe(null);
    await expect(part(canvasElement, 'credit-memo-no-logo', 'title')).toBe(
      null,
    );
    const name = part(canvasElement, 'credit-memo-no-logo', 'companyName');
    await expect(getComputedStyle(name as Element).textTransform).toBe(
      'uppercase',
    );
  },
};

/** Fixture `long-title`: a long title wraps. The meta list keeps its width. */
export const LongTitle: Story = {
  args: { fixture: printFixture('header', 'long-title') },
  play: async ({ canvasElement }) => {
    const title = part(canvasElement, 'long-title', 'title') as HTMLElement;
    const lineHeight = parseFloat(getComputedStyle(title).lineHeight);
    await expect(title.offsetHeight).toBeGreaterThan(lineHeight * 1.5);
    const metaList = part(canvasElement, 'long-title', 'meta') as HTMLElement;
    const fact = metaList.querySelector('.cetec-keyFact__root') as HTMLElement;
    await expect(metaList.offsetWidth).toBeGreaterThanOrEqual(fact.scrollWidth);
  },
};

/**
 * Fixture `quote-wordmark` in thermal ink, on Letter. Tags print as black
 * outlines and every ink is black.
 */
export const QuoteThermal: Story = {
  args: { thermal: true },
  play: async ({ canvasElement }) => {
    const tag = canvasElement.querySelector(
      '[data-fixture="quote-wordmark"] .cetec-tag',
    );
    await expect(getComputedStyle(tag as Element).color).toBe('rgb(0, 0, 0)');
    const sub = part(canvasElement, 'quote-wordmark', 'sub');
    await expect(getComputedStyle(sub as Element).color).toBe('rgb(0, 0, 0)');
  },
};

/**
 * Fixture `first-page-only` on two pages, each 8.5 × 5.5 in, side by side.
 * The header is the first block in the flow, so only page 1 has it. Page 2
 * starts with content. The dashed line is the page edge.
 */
export const FirstPageOnly: Story = {
  args: { fixture: printFixture('header', 'first-page-only') },
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
      '[data-fixture="first-page-only"] [data-fixture-body]',
    ) as HTMLElement;
    const page = body.getBoundingClientRect();
    const middle = page.left + page.width / 2;
    const headers = body.querySelectorAll('.cetec-header__root');
    await expect(headers).toHaveLength(1);
    const header = (headers[0] as HTMLElement).getBoundingClientRect();
    await expect(header.right).toBeLessThan(middle);
    // Content runs onto page 2.
    const lines = body.querySelectorAll('p');
    const last = lines[lines.length - 1] as HTMLElement;
    await expect(last.getBoundingClientRect().left).toBeGreaterThan(middle);
  },
};
