import { defineSlotRecipe } from '@pandacss/dev';

/**
 * A captioned value in a canvas slot, the kit element `label_field`. It
 * prints the check number, date, payee, amount, and memo on a check face, and
 * the part number, PO, and quantity on a label. It works only inside a slot
 * (`printSlot`). This recipe has no React component. The Go print helper
 * writes the markup in `labelField.fixtures.json`.
 *
 * - `root` stacks the caption over the value.
 * - `caption` is the optional caps label. Leave it out when the field has no
 *   caption.
 * - `value` is the value, formatted by Go.
 *
 * Variants:
 * - `type`: `text`, `money`, and `date` print on one line in the mono face.
 *   Money and dates use tabular figures. `amount_words` prints the amount in
 *   words in the body face and wraps.
 * - `size`: `normal` or `large`, for the value that must read from a distance.
 *
 * A value too long for its slot is clipped by the slot. The slot editor flags
 * it on its overlay.
 */
// validate-ignore: recipe-jsx-name-matches-component — print-only recipe with no React component
export const labelFieldRecipe = defineSlotRecipe({
  className: 'labelField',
  jsx: [],
  slots: ['root', 'caption', 'value'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      minW: '0',
      color: 'paper.ink',
    },
    caption: {
      textStyle: 'print.capsLabel',
      color: 'paper.ink',
    },
    value: {
      fontFamily: 'mono',
      fontVariant: 'mono',
      fontSize: 'print.lead',
      fontWeight: 'bold',
      lineHeight: 'tight',
      color: 'paper.ink',
      whiteSpace: 'nowrap',
    },
  },
  variants: {
    type: {
      text: {},
      money: {
        value: { fontVariantNumeric: 'tabular-nums' },
      },
      date: {
        value: { fontVariantNumeric: 'tabular-nums' },
      },
      amount_words: {
        value: {
          fontFamily: 'body',
          fontVariant: 'body',
          whiteSpace: 'normal',
        },
      },
    },
    size: {
      normal: {},
      large: {
        value: {
          fontSize: 'print.display',
          fontWeight: 'black',
        },
      },
    },
  },
  defaultVariants: {
    type: 'text',
    size: 'normal',
  },
});
