import { defineSlotRecipe } from '@pandacss/dev';

/**
 * A captioned value in a canvas slot, the kit element `label_field`. It
 * prints the check number, date, payee, amount, and memo on a check face, and
 * the part number, PO, and quantity on a label. It works only inside a slot
 * (`printSlot`). This recipe has no React component. The Go print helper
 * writes the markup in `printLabelField.fixtures.json`.
 *
 * - `root` stacks the caption over the value.
 * - `caption` is the optional caps label. Leave it out when the field has no
 *   caption.
 * - `value` is the value, formatted by Go.
 *
 * Variants:
 * - `type`: every type prints on one line, except `amount_words`.
 *   - `text` prints in the body face, for names and other words.
 *   - `code` prints in the mono face, for part numbers, POs, and serials.
 *   - `currency` and `date` print in the mono face with tabular figures. Go
 *     maps the kit type `money` to `currency`, as it does for every part.
 *   - `amount_words` prints the amount in words in the body face and wraps.
 * - `size`: `normal` or `large`, for the value that must read from a distance.
 *   A normal value is medium weight (500), and a large value is bold (700).
 *
 * A value too long for its slot is clipped by the slot. The slot editor flags
 * it on its overlay.
 */
// validate-ignore: recipe-jsx-name-matches-component — print-only recipe with no React component
export const printLabelFieldRecipe = defineSlotRecipe({
  className: 'printLabelField',
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
      fontFamily: 'body',
      fontVariant: 'body',
      fontSize: 'print.lead',
      fontWeight: 'medium',
      lineHeight: 'tight',
      color: 'paper.ink',
      whiteSpace: 'nowrap',
    },
  },
  variants: {
    type: {
      text: {},
      code: {
        value: { fontFamily: 'mono', fontVariant: 'mono' },
      },
      currency: {
        value: {
          fontFamily: 'mono',
          fontVariant: 'mono',
          fontVariantNumeric: 'tabular-nums',
        },
      },
      date: {
        value: {
          fontFamily: 'mono',
          fontVariant: 'mono',
          fontVariantNumeric: 'tabular-nums',
        },
      },
      amount_words: {
        value: { whiteSpace: 'normal' },
      },
    },
    size: {
      normal: {},
      large: {
        value: {
          fontSize: 'print.display',
          fontWeight: 'bold',
        },
      },
    },
  },
  defaultVariants: {
    type: 'text',
    size: 'normal',
  },
});
