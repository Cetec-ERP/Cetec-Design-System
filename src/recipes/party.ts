import { defineSlotRecipe } from '@pandacss/dev';

/** An address line. Line breaks in the text print as they are. */
const addressLine = {
  textStyle: 'print.fieldValue',
  fontWeight: 'normal',
  whiteSpace: 'pre-line',
} as const;

/**
 * One party of a printed document, such as From, Bill to, Ship to, or Remit
 * to, for the kit element `party`. It is the only element that prints an
 * address.
 *
 * The label comes first. Then the address lines print in this order:
 * `attention`, `name`, `address`, `country`, and `contact`. The Go print
 * helper skips an empty line. Line breaks in a line print as they are. Inside
 * a print grid, a hairline separates parties that sit side by side.
 *
 * This recipe has no React component. Its fixture in `party.fixtures.json` is
 * the markup the Go helper writes.
 */
// validate-ignore: recipe-jsx-name-matches-component — print-only recipe with no React component
export const partyRecipe = defineSlotRecipe({
  className: 'party',
  jsx: [],
  slots: [
    'root',
    'label',
    'attention',
    'name',
    'address',
    'country',
    'contact',
  ],
  base: {
    root: {
      display: 'block',
      minW: '0',
      // A hairline between parties side by side in a grid.
      '.cetec-printGrid > & + &': {
        borderLeftStyle: 'solid',
        borderLeftWidth: 'paper.rule',
        borderLeftColor: 'paper.hairline',
        pl: '16',
      },
    },
    label: {
      textStyle: 'print.capsLabel',
      mb: '4',
    },
    attention: addressLine,
    name: {
      fontFamily: 'heading',
      fontSize: 'print.heading',
      fontWeight: 'bold',
      lineHeight: 'tight',
      color: 'paper.ink',
    },
    address: addressLine,
    country: addressLine,
    contact: {
      textStyle: 'print.body',
      color: 'paper.inkSoft',
      whiteSpace: 'pre-line',
      mt: '4',
    },
  },
});
