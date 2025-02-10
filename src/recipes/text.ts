import { defineRecipe } from '@pandacss/dev';
import { fonts, fontSizes } from '~/styles/tokens';

const textBase = {
  margin: '0',
  lineHeight: 'default',
  fontWeight: 'normal',
  color: { base: 'slate.70', _dark: 'slate.20' },
};

// const safeFonts = fonts as Record<string, string>;
// const safeFontSizes = fontSizes as Record<string, string>;

const textVariants = {
  family: { ...fonts },
  fontSize: { ...fontSizes },
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
};

const headingBase = {
  fontFamily: 'heading',
  fontWeight: 'black',
  color: { base: 'slate.90', _dark: 'slate.5' },
};

const headingVariants = {
  as: {
    h1: { textStyle: 'heading.lg' },
    h2: { textStyle: 'heading.md' },
    h3: { textStyle: 'heading.sm' },
    h4: { textStyle: 'heading.xs' },
  },
};

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
};

const linkVariants = {
  ...textVariants,
  _disabled: {
    true: {
      cursor: 'not-allowed',
      opacity: 0.7,
      pointerEvents: 'none'
    }
  }
};

export const textRecipe = defineRecipe({
  className: 'text',
  jsx: ['Text'],
  base: textBase,
  variants: textVariants,
  defaultVariants: {
    fontSize: '16',
    family: 'sans',
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
    fontSize: '16',
    family: 'sans',
  },
});
