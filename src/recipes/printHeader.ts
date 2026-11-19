import { defineSlotRecipe } from '@pandacss/dev';

/** The meta list of a document header, inside a printed document. */
const headerMeta = '.cetec-printDoc .cetec-printHeader__meta &';

/**
 * How a KeyFact row looks in the meta list of a header. The KeyFact recipe
 * applies these to its `horizontal` layout, so they sit in the same cascade
 * layer as its other variant styles. Rows align right and print a little
 * larger than body text. Colors come from the row's own `tone`.
 */
export const headerMetaStyles = {
  root: { [headerMeta]: { justifyContent: 'flex-end' } },
  label: { [headerMeta]: { fontSize: 'print.fieldValue' } },
  value: { [headerMeta]: { fontSize: 'print.fieldValue' } },
} as const;

/** The company name in caps, beside a badge logo or in place of a logo. */
const companyName = {
  fontFamily: 'heading',
  fontSize: 'print.total',
  fontWeight: 'black',
  lineHeight: 'tight',
  letterSpacing: 'wide',
  textTransform: 'uppercase',
  color: 'paper.ink',
} as const;

/**
 * The top of a printed document, for the kit element `header`. Quotes,
 * invoices, credit memos, and license plates start with it. It prints once,
 * at the top of the first page, because it is the first block in the flow.
 *
 * It holds the brand bar, the eyebrow line (kind, number, and status tags),
 * the title, the sub line, and the meta list of KeyFact rows. The meta list
 * aligns right, and its KeyFacts use the `horizontal` layout, so labels size
 * themselves and end in a colon.
 *
 * The company name always prints. A `wordmark` logo carries the name, and
 * its `alt` text is the name. A `badge` logo prints the name beside it.
 * With no logo, the name prints as text. The Go print helper picks the
 * logo shape from the logo's width and height.
 *
 * This recipe has no React component. Its fixture in `printHeader.fixtures.json`
 * is the markup the Go helper writes.
 */
// validate-ignore: recipe-jsx-name-matches-component — print-only recipe with no React component
export const printHeaderRecipe = defineSlotRecipe({
  className: 'printHeader',
  jsx: [],
  slots: [
    'root',
    'brand',
    'logo',
    'companyName',
    'record',
    'main',
    'eyebrow',
    'kind',
    'id',
    'title',
    'sub',
    'meta',
  ],
  base: {
    root: {
      display: 'block',
      breakInside: 'avoid',
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: 'print.6',
      pb: 'print.4',
      borderBottomStyle: 'solid',
      borderBottomWidth: 'paper.rule',
      borderBottomColor: 'paper.hairline',
    },
    logo: {
      display: 'block',
      w: 'auto',
      objectFit: 'contain',
    },
    companyName,
    record: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'print.16',
      pt: 'print.8',
    },
    main: {
      flex: '1 1 auto',
      minW: '0',
    },
    eyebrow: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'print.4',
      textStyle: 'print.fieldValue',
      fontWeight: 'bold',
    },
    kind: { whiteSpace: 'nowrap' },
    id: { whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' },
    title: {
      textStyle: 'print.title',
      overflowWrap: 'anywhere',
      mt: 'print.2',
    },
    sub: {
      textStyle: 'print.fieldValue',
      fontWeight: 'normal',
      color: 'paper.inkSoft',
      mt: 'print.2',
    },
    meta: {
      flex: '0 0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 'print.2',
    },
  },
  variants: {
    /** The logo layout. Go picks it from the logo's width and height. */
    logoShape: {
      wordmark: {
        logo: { h: 'headerWordmark', maxW: 'headerWordmarkMax' },
      },
      badge: {
        logo: { h: 'headerBadge', maxW: 'headerBadge' },
      },
    },
  },
  defaultVariants: {
    logoShape: 'wordmark',
  },
});
