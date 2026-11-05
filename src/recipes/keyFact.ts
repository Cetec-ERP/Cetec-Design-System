import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

const keyFactBase = {
  root: {
    ...globalBaseStyles,
    display: 'flex',
    minW: '0',
    maxW: 'full',
  },
  label: {
    flex: 'none',
    whiteSpace: 'nowrap',
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
  },
};

const keyFactVariants = {
  /**
   * `horizontal` reads "Label: Value" on one line, for a page header `aside`.
   * `vertical` stacks the label over a larger value, for a facts strip.
   */
  layout: {
    horizontal: {
      root: { flexDirection: 'row', alignItems: 'center', gap: '4' },
      // A text style sets its own color, so set the label color after it.
      label: { textStyle: 'body.sm', color: 'text.subtle' },
      value: { textStyle: 'body.sm' },
    },
    vertical: {
      root: { flexDirection: 'column', gap: '2' },
      label: { textStyle: 'body.sm', color: 'text.subtle' },
      value: { textStyle: 'body.lg' },
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
};

export const keyFactRecipe = defineSlotRecipe({
  className: 'keyFact',
  jsx: ['KeyFact'],
  slots: ['root', 'label', 'value', 'text', 'actions'],
  base: keyFactBase,
  variants: keyFactVariants,
  defaultVariants: {
    layout: 'horizontal',
    editing: false,
  },
});
