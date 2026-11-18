import { defineSlotRecipe } from '@pandacss/dev';

import { fontVariants, globalBaseStyles } from '~/styles/utilities';

import { totalsRowStyles } from './totals';

/**
 * Matches when the nearest container is narrower than
 * `containerSizes.keyFactStack`. Keep the two widths the same.
 */
const narrowContainer = '@container (width < 15rem)';

/** A long value wraps in place of truncating. */
const wrapText = {
  whiteSpace: 'normal',
  overflow: 'visible',
  textOverflow: 'clip',
  overflowWrap: 'anywhere',
} as const;

/** Tabular figures, so digits line up in a column. Mono digits on paper. */
const figures = {
  text: {
    fontVariantNumeric: 'tabular-nums',
    _printDoc: {
      fontFamily: 'mono',
      fontVariationSettings: fontVariants.mono,
    },
  },
};

const keyFactBase = {
  root: {
    ...globalBaseStyles,
    display: 'flex',
    minW: '0',
    maxW: 'full',
  },
  // Holds the label and the value. It has no box of its own, except in the
  // `aligned` layout, where it stacks them in a narrow container. The root
  // cannot do that, because an element cannot query its own width.
  inner: {
    display: 'contents',
  },
  label: {
    flex: 'none',
    whiteSpace: 'nowrap',
  },
  // The label's text renders in these, through Box. Box resets font and color,
  // so they take both from the label.
  labelWithColon: {
    color: 'inherit',
    fontFamily: 'inherit',
    fontVariationSettings: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
  },
  labelPlain: {
    color: 'inherit',
    fontFamily: 'inherit',
    fontVariationSettings: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
  },
  value: {
    display: 'flex',
    minW: '0',
    // The truncation tooltip wraps the value in a span. Let it shrink so the
    // value can truncate.
    '& > span': {
      w: 'full',
      minW: '0',
    },
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    flex: 'none',
    gap: '2',
    ms: '4',
  },
  text: {
    display: 'block',
    minW: '0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    // A link keeps its own color.
    '&:not(a)': { color: 'text' },
    // Print values never truncate. The text takes its look from the value.
    _printDoc: {
      ...wrapText,
      '&:not(a)': {
        color: 'inherit',
        fontFamily: 'inherit',
        fontVariationSettings: 'inherit',
        fontWeight: 'inherit',
        lineHeight: 'inherit',
      },
    },
    // Totals values never wrap. After `_printDoc`, so it wins.
    ...totalsRowStyles.text,
  },
};

const keyFactVariants = {
  /**
   * `horizontal` reads "Label: Value" on one line, for a page header `aside`.
   * `vertical` stacks the label over a larger value, for a facts strip.
   * `aligned` puts a fixed width label beside the value, for a grid of facts.
   */
  // Each layout sets every property the other one sets, so a conditional
  // layout switches cleanly at a breakpoint. The label renders in both forms,
  // and the layout shows one.
  layout: {
    horizontal: {
      root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4',
      },
      inner: { display: 'contents' },
      // A text style sets its own color, so set the label color after it.
      label: {
        w: 'auto',
        whiteSpace: 'nowrap',
        textStyle: 'body.sm',
        color: 'text.subtle',
        _printDoc: { textStyle: 'print.body', color: 'paper.inkSoft' },
      },
      labelWithColon: { display: 'inline' },
      labelPlain: { display: 'none' },
      value: {
        flex: 'initial',
        textStyle: 'body.sm',
        _printDoc: { textStyle: 'print.body' },
      },
    },
    vertical: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '2',
      },
      inner: { display: 'contents' },
      label: {
        w: 'auto',
        whiteSpace: 'nowrap',
        textStyle: 'body.sm',
        color: 'text.subtle',
        _printDoc: { textStyle: 'print.capsLabel' },
      },
      labelWithColon: { display: 'none' },
      labelPlain: { display: 'inline' },
      value: {
        flex: 'initial',
        textStyle: 'body.lg',
        _printDoc: { textStyle: 'print.fieldValue' },
      },
    },
    /**
     * `aligned` gives the label a fixed width, so the values of separate
     * facts line up in a column. A long label wraps. The fact stacks when its
     * nearest container is narrower than `containerSizes.keyFactStack`. With
     * no container, it does not stack.
     */
    aligned: {
      root: { display: 'block', ...totalsRowStyles.root },
      inner: {
        ...totalsRowStyles.inner,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: '8',
        [narrowContainer]: {
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: '1',
        },
      },
      label: {
        flex: 'none',
        w: 'keyFactLabel',
        whiteSpace: 'normal',
        overflowWrap: 'anywhere',
        textStyle: 'body.sm',
        color: 'text.subtle',
        _printDoc: { textStyle: 'print.capsLabel' },
        [narrowContainer]: { w: 'auto' },
        ...totalsRowStyles.label,
      },
      labelWithColon: { display: 'none' },
      labelPlain: { display: 'inline' },
      value: {
        flex: '1',
        textStyle: 'body.sm',
        _printDoc: { textStyle: 'print.fieldValue' },
        ...totalsRowStyles.value,
      },
    },
  },
  /** Replaces the value with a text input. */
  editing: {
    true: {
      root: { w: '280' },
      value: { flex: '1' },
    },
    false: {},
  },
  /** A long value wraps in place of truncating. Always on in print. */
  wrap: {
    true: { text: wrapText },
    false: {},
  },
  /**
   * The kind of value. `number` and `currency` use tabular figures. A `date`
   * does not wrap. `text` and `person` have no look of their own.
   */
  type: {
    text: {},
    number: figures,
    currency: figures,
    date: {
      text: {
        whiteSpace: 'nowrap',
        // Panda can emit this rule before the `wrap` rule, so beat it here.
        '&.cetec-keyFact__text--wrap_true': { whiteSpace: 'nowrap' },
      },
    },
    person: {},
  },
  /** `total` is the large last row in a stack of totals. */
  emphasis: {
    normal: {},
    total: {
      label: {
        color: 'text',
        _printDoc: { color: 'paper.ink' },
        ...totalsRowStyles.totalCell,
      },
      value: {
        textStyle: 'body.lg',
        fontWeight: 'bold',
        _printDoc: { textStyle: 'print.total' },
        ...totalsRowStyles.totalCell,
      },
    },
  },
  /** `danger` shows the label and the value in the alert color. */
  tone: {
    neutral: {},
    danger: {
      label: {
        color: 'text.danger',
        _printDoc: { color: 'paper.inkAlert' },
      },
      value: { _printDoc: { color: 'paper.inkAlert' } },
      text: {
        '&:not(a)': { color: 'text.danger' },
        // On paper the text takes the alert ink from the value.
        _printDoc: { '&:not(a)': { color: 'inherit' } },
      },
    },
  },
};

export const keyFactRecipe = defineSlotRecipe({
  className: 'keyFact',
  jsx: ['KeyFact'],
  slots: [
    'root',
    'inner',
    'label',
    'labelWithColon',
    'labelPlain',
    'value',
    'text',
    'actions',
  ],
  base: keyFactBase,
  variants: keyFactVariants,
  defaultVariants: {
    layout: 'horizontal',
    editing: false,
    wrap: false,
    type: 'text',
    emphasis: 'normal',
    tone: 'neutral',
  },
});
