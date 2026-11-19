/**
 * The recipes that make up the print kit. Each one ships in `print.css`, has a
 * markup fixture beside it in `src/recipes/<name>.fixtures.json`, and is
 * listed in `print-classes.json`.
 *
 * Add a recipe here when it gets a print look. A recipe can be print-only,
 * such as `printDoc`, or an app recipe with `_printDoc` styles.
 */
export const printRecipeNames = [
  'printDoc',
  'printCanvas',
  'printSlot',
  'printLabelField',
  'barcode',
  'printGrid',
  'keyFact',
  'tag',
  'printHeader',
  'printParty',
  'printTotals',
  'text',
  'divider',
  'checkbox',
  'printSection',
  'image',
  'printPageBreak',
  'printSignLine',
] as const;

/** The name of a recipe in the print kit. */
export type PrintRecipeName = (typeof printRecipeNames)[number];

/**
 * Classes the Go print helper puts on the `<html>` element. `@page` margin
 * boxes inherit custom properties from `<html>` only, so the classes must go
 * there, not on `<body>`.
 */
export const printRootClasses = {
  /** Every kit document. Read by recipes as `_printDoc`. */
  printDoc: 'cetec-printDoc',
  /** Thermal label printers. Read by recipes as `_thermal`. */
  thermal: 'cetec-ink-thermal',
} as const;
