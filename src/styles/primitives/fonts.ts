import { defineTokens } from '@pandacss/dev';

export const fonts = defineTokens.fonts({
  heading: {
    value: "'Ruda Variable', Source Sans, Geneva, Tahoma, Verdana, sans-serif;",
  },
  body: { value: "'Recursive Variable', Geneva, Tahoma, Verdana, sans-serif;" },
  mono: {
    value:
      "'Recursive Variable', Andale Mono, monaco, Consolas, Lucida Console, monospace;",
  },
});
