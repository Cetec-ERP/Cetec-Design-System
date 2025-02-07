import { defineRecipe } from '@pandacss/dev';
import { fontSizes, fonts, letterSpacings, textTransform } from '~/styles/tokens';

const textBase = {
  margin: '0',
  lineHeight: 'default',
  fontWeight: 'normal',
  color: { base: 'slate.70', _dark: 'slate.20' },
};

const textVariants = {
  level: {
    '12': { fontSize: fontSizes['12'].value },
    '14': { fontSize: fontSizes['14'].value },
    '16': { fontSize: fontSizes['16'].value },
    '20': { fontSize: fontSizes['20'].value },
    '24': { fontSize: fontSizes['24'].value },
    '32': { fontSize: fontSizes['32'].value },
    '40': { fontSize: fontSizes['40'].value },
    '48': { fontSize: fontSizes['48'].value },
    '64': { fontSize: fontSizes['64'].value },
    '72': { fontSize: fontSizes['72'].value },
    '80': { fontSize: fontSizes['80'].value },
    '96': { fontSize: fontSizes['96'].value },
  },
  font: {
    heading: { fontFamily: fonts.heading.value },
    body: { fontFamily: fonts.sans.value },
    mono: { fontFamily: fonts.mono.value },
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
  letterSpacing: {
    tighter: { letterSpacing: letterSpacings.tighter.value },
    tight: { letterSpacing: letterSpacings.tight.value },
    normal: { letterSpacing: letterSpacings.normal.value },
    wide: { letterSpacing: letterSpacings.wide.value },
    wider: { letterSpacing: letterSpacings.wider.value },
    widest: { letterSpacing: letterSpacings.widest.value }
  },
  textTransform: {
    uppercase: { textTransform: textTransform.uppercase.value },
    lowercase: { textTransform: textTransform.lowercase.value },
    capitalize: { textTransform: textTransform.capitalize.value },
    none: { textTransform: textTransform.none.value }
  },
}

const headingBase = {
  fontFamily: 'heading',
  fontWeight: 'black',
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

const linkBase = {
  display: 'inline-flex',
  alignItems: 'center',
  fontWeight: 'medium',
  gap: '1',
  color: { base: 'blue.50', _dark: 'blue.40' },
  textDecoration: 'none',
  backgroundImage: 'linear-gradient(90deg, transparent 0% 100%)',
  backgroundSize: '100% 1px',
  backgroundRepeat: 'no-repeat',
  backgroundPositionY: '100%',
  width: 'fit-content',
  cursor: 'pointer',
  _hover: { 
    color: { base: 'blue.40', _dark: 'blue.30' },
    backgroundImage: 'linear-gradient(90deg, currentColor 0% 100%)',
  },
}

const linkVariants = {
  ...textVariants,
  _disabled: {
    true: {
      cursor: 'not-allowed',
      opacity: 0.7,
      pointerEvents: 'none'
    }
  }
}

export const textRecipe = defineRecipe({
  className: 'text',
  jsx: ['Text'],
  base: textBase,
  variants: { ...textVariants },
  defaultVariants: {
    level: '16',
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

export const linkRecipe = defineRecipe({
  className: 'link',
  jsx: ['Link'],
  base: linkBase,
  variants: linkVariants,
  defaultVariants: {
    level: '16',
    font: 'sans',
  },
});
