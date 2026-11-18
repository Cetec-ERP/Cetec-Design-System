import { defineSemanticTokens } from '@pandacss/dev';

/**
 * Rule widths for printed documents, in points. Under the `thermal`
 * condition both widths are 1.5 pt, because thinner rules do not print on a
 * thermal label printer.
 */
export const borderWidths = defineSemanticTokens.borderWidths({
  paper: {
    /** The thinnest rule, such as a tag outline. 0.5 pt on paper. */
    hairline: { value: { base: '0.5pt', _thermal: '1.5pt' } },
    /** Rules between rows and sections. 1 pt on paper. */
    rule: { value: { base: '1pt', _thermal: '1.5pt' } },
  },
});
