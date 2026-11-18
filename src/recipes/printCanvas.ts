import { defineSlotRecipe } from '@pandacss/dev';

/**
 * A canvas layout for checks and labels. The author places slots on a
 * 1/64 in grid, and each slot holds kit elements. This recipe has no React
 * component. The Go print helper writes the markup in
 * `printCanvas.fixtures.json`.
 *
 * - `root` is the stock, such as a Letter check sheet or a 4 × 6 in label.
 *   Go sets its `width` and `height` in inches as inline values. It clips
 *   anything outside the stock.
 * - `layer` holds the slots. Each slot is a `printSlot`, placed in the layer.
 *
 * The ink comes from the document root: add `cetec-ink-thermal` on `<html>`
 * for thermal label printers. A canvas has no ink class of its own.
 *
 * `rotate: 90` turns the whole layout a quarter turn clockwise on the stock.
 * The layout is then as wide as the stock is tall, so a 4 × 6 in stock holds
 * a 6 × 4 in layout. Slot positions stay in layout space.
 *
 * Go writes one canvas per item when a label repeats. Each canvas starts a
 * new page.
 */
// validate-ignore: recipe-jsx-name-matches-component — print-only recipe with no React component
export const printCanvasRecipe = defineSlotRecipe({
  className: 'printCanvas',
  jsx: [],
  slots: ['root', 'layer'],
  base: {
    root: {
      position: 'relative',
      overflow: 'hidden',
      bg: 'paper',
      // Lets the layer read the stock size in container units when it turns.
      containerType: 'size',
      breakInside: 'avoid',
      breakAfter: 'page',
      '&:last-child': {
        breakAfter: 'auto',
      },
    },
    layer: {
      position: 'absolute',
      top: '0',
      left: '0',
      w: 'full',
      h: 'full',
    },
  },
  variants: {
    rotate: {
      '0': {},
      '90': {
        layer: {
          // The layout is as wide as the stock is tall, and the other way.
          w: '[100cqh]',
          h: '[100cqw]',
          left: 'full',
          transformOrigin: 'top left',
          transform: 'rotate(90deg)',
        },
      },
    },
  },
  defaultVariants: {
    rotate: '0',
  },
});
