import { defineSemanticTokens } from '@pandacss/dev';

export const fontSizes = defineSemanticTokens.fontSizes({
  display: {
    lg: {
      value: '{sizes.72}',
    },
    md: {
      value: '{sizes.64}',
    },
    sm: {
      value: '{sizes.56}',
    },
    xs: {
      value: '{sizes.48}',
    },
  },
  heading: {
    lg: {
      value: '{sizes.40}',
    },
    md: {
      value: '{sizes.32}',
    },
    sm: {
      value: '{sizes.24}',
    },
    xs: {
      value: '{sizes.20}',
    },
  },
  body: {
    lg: {
      value: '{sizes.20}',
    },
    md: {
      value: '{sizes.16}',
    },
    sm: {
      value: '{sizes.14}',
    },
    xs: {
      value: '{sizes.12}',
    },
  },
  mono: {
    lg: {
      value: '{sizes.20}',
    },
    md: {
      value: '{sizes.16}',
    },
    sm: {
      value: '{sizes.14}',
    },
    xs: {
      value: '{sizes.12}',
    },
  },
  /**
   * Type sizes for printed documents, in points. A point is 1/72 inch, so
   * these sizes hold on any printer.
   */
  print: {
    /** Small caps labels, such as field labels and table headers. */
    capsLabel: { value: '7pt' },
    /** Field values. */
    fieldValue: { value: '9.5pt' },
    /** Body text and table cells. */
    body: { value: '8.5pt' },
    /** Terms, notes, and page numbers. */
    smallPrint: { value: '7.5pt' },
    /** The document title. */
    title: { value: '20pt' },
    /** The grand total. */
    total: { value: '14pt' },
    /** Names in a block, such as the company name in an address. */
    heading: { value: '11pt' },
  },
});
