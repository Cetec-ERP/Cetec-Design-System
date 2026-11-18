import { defineSlotRecipe } from '@pandacss/dev';

/**
 * One slot on a canvas layout (`printCanvas`). This recipe has no React
 * component. The Go print helper writes the markup in
 * `printSlot.fixtures.json`.
 *
 * - `root` is the slot box. Go sets its `left`, `top`, `width`, and `height`
 *   in inches as inline values, on the 1/64 in grid. The class carries the
 *   look, never the position.
 * - `content` holds the kit elements, inset from the slot edges.
 *
 * A slot has a fixed size. It never grows, and it clips content that does not
 * fit. Go also writes `data-slot` with the slot name, so the editor overlay
 * and tests can find it.
 *
 * Variants:
 * - `rotate: 90` turns the content a quarter turn clockwise inside the slot.
 *   The box stays where it is placed.
 * - `rule: true` draws a rule along the top edge.
 * - `micr: true` is the locked MICR line at the bottom of a check face. Only
 *   Cetec's own slot uses it. The Go print path sets the MICR font, so the
 *   line falls back to the mono face here.
 */
// validate-ignore: recipe-jsx-name-matches-component — print-only recipe with no React component
export const printSlotRecipe = defineSlotRecipe({
  className: 'printSlot',
  jsx: [],
  slots: ['root', 'content'],
  base: {
    root: {
      position: 'absolute',
      overflow: 'hidden',
      // Lets the content read the slot size in container units when it turns.
      containerType: 'size',
    },
    content: {
      position: 'absolute',
      top: '0',
      left: '0',
      display: 'flex',
      flexDirection: 'column',
      w: 'full',
      h: 'full',
      overflow: 'hidden',
      py: 'print.slotBlock',
      px: 'print.slotInline',
    },
  },
  variants: {
    rotate: {
      '0': {},
      '90': {
        content: {
          // The content is as wide as the slot is tall, and the other way.
          w: '[100cqh]',
          h: '[100cqw]',
          left: 'full',
          transformOrigin: 'top left',
          transform: 'rotate(90deg)',
        },
      },
    },
    rule: {
      true: {
        root: {
          borderTopStyle: 'solid',
          borderTopWidth: 'paper.rule',
          borderTopColor: 'paper.ink',
        },
      },
      false: {},
    },
    micr: {
      true: {
        content: {
          justifyContent: 'center',
          alignItems: 'flex-end',
          // The MICR line is placed from the right edge, with no inset.
          p: '0',
          fontFamily: 'mono',
          fontVariant: 'mono',
          lineHeight: 'none',
          letterSpacing: 'normal',
          whiteSpace: 'nowrap',
          // Bank readers need solid black on every ink.
          color: 'slate.100',
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    rotate: '0',
    rule: false,
    micr: false,
  },
});
