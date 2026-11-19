import { defineRecipe } from '@pandacss/dev';

/** The class of the totals root, as the Go print helper writes it. */
const totalsRoot = '.cetec-printTotals &';

/**
 * How a KeyFact row looks inside totals. The KeyFact recipe applies these to
 * its `aligned` layout, so they sit in the same cascade layer as its other
 * variant styles. Colors come from the row's own `emphasis` and `tone`.
 */
export const totalsRowStyles = {
  /** The root and its inner wrapper give their cells to the totals grid. */
  root: { [totalsRoot]: { display: 'contents' } },
  inner: { [totalsRoot]: { display: 'contents' } },
  label: {
    [totalsRoot]: {
      w: 'auto',
      textAlign: 'right',
      py: 'print.2',
    },
  },
  value: {
    [totalsRoot]: {
      justifyContent: 'flex-end',
      textAlign: 'right',
      py: 'print.2',
      color: 'paper.inkSoft',
    },
  },
  text: {
    [totalsRoot]: { whiteSpace: 'nowrap' },
  },
  /**
   * A total row has a hairline above it. Both cells stretch to the row
   * height, so the hairline is one line, and center their text.
   */
  totalCell: {
    [totalsRoot]: {
      alignSelf: 'stretch',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      borderTopStyle: 'solid',
      borderTopWidth: 'paper.rule',
      borderTopColor: 'paper.hairline',
      mt: 'print.2',
      pt: 'print.6',
    },
  },
} as const;

/**
 * The money stack after the lines of a printed document, for the kit element
 * `totals`. It holds subtotal, freight, taxes, total, payments, retainage, and
 * balance due. It prints once, after the last line.
 *
 * It has no props. Each row is a KeyFact in the `aligned` layout. Labels and
 * values align right, in two columns, at most 3.4 in wide. Values use tabular
 * figures and never wrap. A row with `emphasis="total"` prints large in full
 * ink with a hairline above it. A row with `tone="danger"` prints in the
 * alert ink. The stack is kept together on one page.
 *
 * This recipe has no React component. Its fixture in `printTotals.fixtures.json`
 * is the markup the Go print helper writes.
 */
// validate-ignore: recipe-jsx-name-matches-component — print-only recipe with no React component
export const printTotalsRecipe = defineRecipe({
  className: 'printTotals',
  jsx: [],
  base: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    columnGap: 'print.12',
    alignItems: 'center',
    w: 'full',
    maxW: 'totalsWidth',
    ml: 'auto',
    mt: 'print.8',
    pt: 'print.4',
    borderTopStyle: 'solid',
    borderTopWidth: 'paper.rule',
    borderTopColor: 'paper.inkSoft',
    breakInside: 'avoid',
  },
});
