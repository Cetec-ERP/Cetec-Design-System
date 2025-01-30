import { defineRecipe } from '@pandacss/dev';

const textBase = {
  margin: '0',
  lineHeight: 'default',
  fontWeight: 'normal',
  color: { base: 'slate.70', _dark: 'slate.20' },
};

const textVariants = {
  level: {
    12: { fontSize: 12 },
    14: { fontSize: 14 },
    16: { fontSize: 16 },
    20: { fontSize: 20 },
    24: { fontSize: 24 },
    32: { fontSize: 32 },
    40: { fontSize: 40 },
    48: { fontSize: 48 },
    64: { fontSize: 64 },
    72: { fontSize: 72 },
    80: { fontSize: 80 },
    96: { fontSize: 96 },
  },
  font: {
    heading: { fontFamily: 'heading' },
    sans: { fontFamily: 'sans' },
    mono: { fontFamily: 'mono' },
  },
  bold: {
    true: {
      fontWeight: 'bold',
    },
  },
  italic: {
    true: {
      fontStyle: 'italic',
    },
  },
  underline: {
    true: {
      textDecoration: 'underline',
    },
  },
}

const headingBase = {
  fontFamily: 'heading',
  fontWeight: 'bold',
  color: { base: 'slate.90', _dark: 'slate.5' },
}

const headingVariants = {
  as: {
    h1: { textStyle: 'heading.lg' },
    h2: { textStyle: 'heading.md' },
    h3: { textStyle: 'heading.sm' },
    h4: { textStyle: 'heading.xs' },
  },
}

export const textRecipe = defineRecipe({
  className: 'text',
  jsx: ['Text'],
  base: textBase,
  variants: textVariants,
  defaultVariants: {
    level: 16,
    font: 'sans',
  },
});

export const headingRecipe = defineRecipe({
  className: 'heading',
  jsx: ['Heading'],
  base: headingBase,
  variants: headingVariants,
  defaultVariants: {
    as: 'h2',
  },
});

// export type TextVariantProps = typeof text.variantProps;
