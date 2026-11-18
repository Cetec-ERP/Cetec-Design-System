import { defineSlotRecipe } from '@pandacss/dev';

/**
 * Starts a new page in a printed document, for the kit element `page_break`.
 * It has no props. The root sets `break-after: page`.
 *
 * On screen, such as the editor preview, it shows a dashed line and the
 * `label` slot, which says "Page break". The Go print helper writes the label
 * text, so it can use the company language. In print, the line and the label
 * do not show, and the break takes no space.
 *
 * The kit checker does not allow a page break inside a table or totals.
 *
 * This recipe has no React component. Its fixtures in
 * `printPageBreak.fixtures.json` are the markup the Go helper writes.
 */
// validate-ignore: recipe-jsx-name-matches-component — print-only recipe with no React component
export const printPageBreakRecipe = defineSlotRecipe({
  className: 'printPageBreak',
  jsx: [],
  slots: ['root', 'label'],
  base: {
    root: {
      display: 'block',
      breakAfter: 'page',
      my: '12',
      borderTopWidth: '1',
      borderTopStyle: 'dashed',
      borderTopColor: 'paper.inkSoft',
      _print: {
        my: '0',
        borderTopWidth: '0',
      },
    },
    label: {
      display: 'block',
      pt: '4',
      textStyle: 'print.capsLabel',
      _print: {
        display: 'none',
      },
    },
  },
});
