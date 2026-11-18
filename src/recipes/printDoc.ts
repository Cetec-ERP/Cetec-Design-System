import { defineRecipe } from '@pandacss/dev';

/**
 * The root of a printed document. The Go print helper puts the
 * `cetec-printDoc` class on the `<html>` element of every kit document.
 *
 * The root sets the white sheet, the paper ink, and the body text style.
 * Semantic colors reset to their light values inside it, and recipes read it
 * as the `_printDoc` condition. Add `cetec-ink-thermal` next to it for thermal
 * label printers. That class is a condition, not a variant, so it has no
 * styles of its own here.
 *
 * This recipe has no React component. Its fixture in `printDoc.fixtures.json`
 * is the markup the Go helper writes.
 */
// validate-ignore: recipe-jsx-name-matches-component — print-only recipe with no React component
export const printDocRecipe = defineRecipe({
  className: 'printDoc',
  jsx: [],
  base: {
    bg: 'paper',
    color: 'paper.ink',
    textStyle: 'print.body',
    colorScheme: 'light',
    // Print backgrounds and tints as they are, without the browser's ink saver.
    printColorAdjust: 'exact',
  },
});
