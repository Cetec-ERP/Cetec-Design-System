import { defineRecipe } from '@pandacss/dev';

/**
 * The root of a printed document. The Go print helper puts the
 * `cetec-printDoc` class on the `<html>` element of every kit document.
 *
 * The root sets the white sheet and the paper ink. Semantic colors reset to
 * their light values inside it, and recipes read it as the `_printDoc`
 * condition.
 *
 * `<html>` keeps the browser text size, so 1 rem is 16 px on paper, as it is
 * on screen. `<body>` carries the body text style, `print.body` (8.5 pt).
 * Each top-level block in `<body>` after the first gets `print.12` (12 pt)
 * above it. A part that sets its own top margin, such as a section, keeps it.
 * A block right after a page break and a canvas get no top margin, so they
 * start at the top of their page. A margin after a forced break stays on the
 * new page, and on label stock it would push the canvas onto the next label.
 *
 * The rules select `<body>` as the root's child, not by its tag name. So a
 * stand-in for `<body>`, such as the `div` in a story, takes the same rules. Add `cetec-ink-thermal` next to it for thermal
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
    colorScheme: 'light',
    // Print backgrounds and tints as they are, without the browser's ink saver.
    printColorAdjust: 'exact',
    // `<body>`. `<head>`, the other child, does not render.
    '& > *': {
      textStyle: 'print.body',
    },
    // Each top-level block after the first. `:where` keeps the rule weak, so
    // a part's own top margin wins.
    ':where(&) > * > * + *': {
      mt: 'print.12',
    },
    // A block right after a page break, and each canvas, start at the top of
    // their page. These come after the rule above and are just as weak, so
    // they win over it, and a part's own top margin still wins over them.
    ':where(&) > * > :where(.cetec-printPageBreak__root) + *': {
      mt: '0',
    },
    ':where(&) > * > :where(.cetec-printCanvas__root)': {
      mt: '0',
    },
  },
});
