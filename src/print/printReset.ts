import { printRootClasses } from './printRecipes';

import type { GlobalStyleObject } from '@pandacss/types';

/**
 * The small reset in `print.css`. It removes default margins and padding,
 * sets border-box sizing, and collapses table borders.
 */
export const printReset = {
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: '0',
  },
} satisfies GlobalStyleObject;

/**
 * The same reset, limited to the inside of a `cetec-printDoc` root. The app
 * stylesheet carries it, so a print story in the app reads the same reset as
 * a document that links `print.css`. It sits in the `base` layer, so it beats
 * the app reset and loses to every recipe.
 */
export const scopedPrintReset: GlobalStyleObject = Object.fromEntries(
  Object.entries(printReset).map(([selector, styles]) => [
    selector
      .split(',')
      .map((part) => `.${printRootClasses.printDoc} ${part.trim()}`)
      .join(', '),
    styles,
  ]),
);
