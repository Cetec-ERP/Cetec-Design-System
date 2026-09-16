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
});
