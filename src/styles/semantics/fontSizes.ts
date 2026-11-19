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
   * The print text scale, in points. A point is 1/72 inch, so these sizes
   * hold on any printer. Every print text size is one of these eight steps,
   * from smallest to largest: 7, 7.5, 8.5, 9.5, 11, 14, 17, and 20 pt.
   */
  print: {
    /** 7 pt. Small caps labels, such as field labels and table headers. */
    capsLabel: { value: '7pt' },
    /** 7.5 pt. Terms, notes in small print, and page numbers. */
    smallPrint: { value: '7.5pt' },
    /** 8.5 pt. Body text and table cells. The `<body>` of every document. */
    body: { value: '8.5pt' },
    /** 9.5 pt. Field values, address lines, and header info rows. */
    fieldValue: { value: '9.5pt' },
    /**
     * 11 pt. A line that leads its block, such as a name in an address or a
     * value in a canvas slot.
     */
    lead: { value: '11pt' },
    /** 14 pt. The grand total. */
    total: { value: '14pt' },
    /**
     * 17 pt. A value read from a distance, such as the part number on a
     * label.
     */
    display: { value: '17pt' },
    /** 20 pt. The document title. */
    title: { value: '20pt' },
  },
});
