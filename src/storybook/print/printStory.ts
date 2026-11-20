import { type CSSProperties } from 'react';

import { pageSizes } from '~/components/PrintPreview/pageSizes';
import { fixtureRootClasses, type PrintFixture } from '~/print/printFixtures';
import {
  type PrintClassManifest,
  type PrintDeclarations,
} from '~/print/printManifest';
import { printRootClasses } from '~/print/printRecipes';

/** Paper sizes a kit template can choose. Letter is the default. */
export const paperSizes = {
  letter: pageSizes.letter,
  a4: pageSizes.a4,
  legal: pageSizes.legal,
} as const;

/** A paper size a kit template can choose. */
export type PaperName = keyof typeof paperSizes;

/** The `<html>` classes of a fixture, with thermal ink added when asked. */
export const fixtureHtmlClasses = (
  fixture: PrintFixture,
  thermal = false,
): string[] => {
  const roots = fixtureRootClasses(fixture);
  return thermal && !roots.includes(printRootClasses.thermal)
    ? [...roots, printRootClasses.thermal]
    : roots;
};

/**
 * The document the Go print helper writes for a fixture, as HTML source. The
 * body is the fixture HTML exactly as stored, on one line.
 */
export const fixtureDocument = (
  fixture: PrintFixture,
  thermal = false,
): string =>
  [
    `<html class="${fixtureHtmlClasses(fixture, thermal).join(' ')}">`,
    '  <head>',
    '    <link rel="stylesheet" href="print.css" />',
    '  </head>',
    '  <body>',
    `    ${fixture.html}`,
    '  </body>',
    '</html>',
  ].join('\n');

/** Turns CSS declarations from the manifest into a React style object. */
export const declarationsToStyle = (
  declarations: PrintDeclarations,
): CSSProperties =>
  Object.fromEntries(
    Object.entries(declarations).map(([property, value]) => [
      property.replace(/-([a-z])/g, (_match, letter: string) =>
        letter.toUpperCase(),
      ),
      value,
    ]),
  ) as CSSProperties;

/** Which page number footer to write. */
export type PageFooterFormat =
  keyof PrintClassManifest['pageFooter']['content'];

/** The `@page` rule the Go print helper writes for page numbers. */
export const pageFooterCss = (
  manifest: PrintClassManifest,
  format: PageFooterFormat,
  paper: PaperName = 'letter',
): string => {
  const { pageFooter } = manifest;
  const lines = Object.entries(pageFooter.declarations).map(
    ([property, value]) => `    ${property}: ${value};`,
  );
  return [
    '@page {',
    `  size: ${paper === 'a4' ? 'A4' : paper};`,
    '  margin: 0.5in;',
    `  ${pageFooter.marginBox} {`,
    `    content: ${pageFooter.content[format]};`,
    ...lines,
    '  }',
    '}',
  ].join('\n');
};
