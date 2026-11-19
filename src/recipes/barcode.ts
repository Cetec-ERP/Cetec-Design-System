import { defineSlotRecipe } from '@pandacss/dev';

/**
 * The frame for a barcode, the kit element `barcode`. Go encodes the value
 * and draws the bars as inline SVG. This recipe sets the frame, the bar ink,
 * and the text under the bars. It has no React component. The Go print
 * helper writes the markup in `barcode.fixtures.json`.
 *
 * - `root` holds the bars and the text, centered on each other.
 * - `bars` is the SVG Go draws. Its `viewBox` is one unit per module, with
 *   the quiet zone inside it. Bars are solid black on every ink.
 * - `text` is the value under a Code 128, in the mono face. QR and Data
 *   Matrix codes have no text.
 * - `error` is the box the preview shows when Go cannot encode the value,
 *   such as "Code 128 cannot encode this character." Go never changes the
 *   value to make it fit.
 *
 * Go sets the SVG attributes that CSS cannot:
 * - Code 128: `preserveAspectRatio="none"`, so the bars stretch to the
 *   height, and a `width` in inches: the module count times the module
 *   width. In a slot, the module width is the widest whole number of
 *   printer dots that fits the slot width.
 * - QR and Data Matrix: `preserveAspectRatio="xMinYMin meet"`, so the code
 *   stays square. In a slot, `width` is the largest square that fits.
 *
 * Variants:
 * - `symbology`: `code128`, `qr`, or `datamatrix`.
 * - `placement`: `flow` gives every code one fixed height. `slot` fills the
 *   slot height below any other element in the slot.
 */
// validate-ignore: recipe-jsx-name-matches-component — print-only recipe with no React component
export const barcodeRecipe = defineSlotRecipe({
  className: 'barcode',
  jsx: [],
  slots: ['root', 'bars', 'text', 'error'],
  base: {
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'print.2',
      maxW: 'full',
      verticalAlign: 'top',
      color: 'paper.ink',
    },
    bars: {
      display: 'block',
      flexShrink: 0,
      // Scanners need solid black, so the bars ignore the paper inks.
      fill: 'slate.100',
      shapeRendering: 'crispEdges',
    },
    text: {
      fontFamily: 'mono',
      fontVariant: 'mono',
      fontSize: 'print.capsLabel',
      fontWeight: 'normal',
      lineHeight: 'none',
      letterSpacing: 'wide',
      whiteSpace: 'nowrap',
      color: 'paper.ink',
    },
    error: {
      textStyle: 'print.smallPrint',
      color: 'paper.inkAlert',
      borderWidth: 'paper.rule',
      borderStyle: 'solid',
      borderColor: 'paper.inkAlert',
      py: 'print.2',
      px: 'print.6',
    },
  },
  variants: {
    symbology: {
      code128: {},
      qr: {
        bars: { aspectRatio: 'square' },
      },
      datamatrix: {
        bars: { aspectRatio: 'square' },
      },
    },
    placement: {
      flow: {
        bars: { h: 'print.barcode' },
      },
      slot: {
        root: {
          flex: '1 1 0',
          minH: '0',
          alignSelf: 'flex-start',
        },
        bars: {
          flex: '1 1 0',
          minH: '0',
        },
      },
    },
  },
  defaultVariants: {
    symbology: 'code128',
    placement: 'flow',
  },
});
