import { defineSemanticTokens } from '@pandacss/dev';

/**
 * Sizes for printed documents, in inches. They hold on any printer, where the
 * app sizes in rem do not: `print.css` sets the body text size on `<html>`.
 */
export const sizes = defineSemanticTokens.sizes({
  print: {
    /** Height of a barcode in the flow of a document, for every symbology. */
    barcode: { value: '0.625in' },
  },
});
