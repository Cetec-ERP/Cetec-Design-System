import { defineSlotRecipe } from '@pandacss/dev';

/**
 * A titled group in a printed document, for the kit element `section`. The
 * invoice uses it for groups such as Payments received.
 *
 * The `title` slot prints as a caps heading with a hairline under it. It
 * never ends a page alone. Content follows the title inside the `root` slot.
 * `keep="together"` keeps the whole section on one page when it fits. With no
 * title, the Go print helper leaves out the `title` element.
 *
 * This recipe has no React component. Its fixtures in
 * `printSection.fixtures.json` are the markup the Go helper writes.
 */
// validate-ignore: recipe-jsx-name-matches-component — print-only recipe with no React component
export const printSectionRecipe = defineSlotRecipe({
  className: 'printSection',
  jsx: [],
  slots: ['root', 'title'],
  base: {
    root: {
      display: 'block',
      // Space between sections. The first section starts at its own top.
      '&:not(:first-child)': {
        mt: '20',
      },
    },
    title: {
      display: 'block',
      textStyle: 'print.capsLabel',
      pb: '5',
      mb: '5',
      borderBottomWidth: 'paper.rule',
      borderBottomStyle: 'solid',
      borderBottomColor: 'paper.hairline',
      breakAfter: 'avoid',
    },
  },
  variants: {
    keep: {
      none: {},
      together: {
        root: {
          breakInside: 'avoid',
        },
      },
    },
  },
  defaultVariants: {
    keep: 'none',
  },
});
