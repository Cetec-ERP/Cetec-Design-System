import { defineSemanticTokens } from '@pandacss/dev';

/**
 * Sizes for printed documents, in inches and points. They hold on any printer,
 * where the app sizes in rem do not: `print.css` sets the body text size on
 * `<html>`, and a point is 1/72 inch.
 */
export const sizes = defineSemanticTokens.sizes({
  print: {
    /** Height of a barcode in the flow of a document, for every symbology. */
    barcode: { value: '0.625in' },
  },
  paper: {
    /**
     * The printed tick box icon. The box inside the 24-unit icon is 10 pt
     * wide, and its outline is about 1.1 pt.
     */
    tickBox: { value: '16pt' },
  },
});
