import { defineRecipe } from '@pandacss/dev';
import {
  fontSizes as fontSizeTokens,
  fontWeights as fontWeightTokens,
} from '../styles/tokens';

const textBase = {
  margin: '0',
  lineHeight: 'default',
  fontWeight: 'normal',
  fontSize: '16',
  color: { base: 'slate.60', _dark: 'slate.30' },
};

type FontSizeKey = keyof typeof fontSizeTokens;
const fontSizes = (Object.keys(fontSizeTokens) as FontSizeKey[]).reduce(
  (accumulator, currentKey) => {
    accumulator[currentKey] = { fontSize: fontSizeTokens[currentKey].value };
    return accumulator;
  },
  {} as Record<FontSizeKey, Record<'fontSize', string>>,
);

type FontWeightKey = keyof typeof fontWeightTokens;
const fontWeights = (Object.keys(fontWeightTokens) as FontWeightKey[]).reduce(
  (accumulator, currentKey) => {
    accumulator[currentKey] = {
      fontWeight: fontWeightTokens[currentKey].value,
    };
    return accumulator;
  },
  {} as Record<FontWeightKey, Record<'fontWeight', number>>,
);

const textVariants = {
  textStyle: {
    'display-lg': { textStyle: 'display.lg' },
    'display-md': { textStyle: 'display.md' },
    'display-sm': { textStyle: 'display.sm' },
    'display-xs': { textStyle: 'display.xs' },
    'heading-lg': { textStyle: 'heading.lg' },
    'heading-md': { textStyle: 'heading.md' },
    'heading-sm': { textStyle: 'heading.sm' },
    'heading-xs': { textStyle: 'heading.xs' },
    'body-lg': { textStyle: 'body.lg' },
    'body-md': { textStyle: 'body.md' },
    'body-sm': { textStyle: 'body.sm' },
    'body-xs': { textStyle: 'body.xs' },
    'mono-lg': { textStyle: 'mono.lg' },
    'mono-md': { textStyle: 'mono.md' },
    'mono-sm': { textStyle: 'mono.sm' },
    'mono-xs': { textStyle: 'mono.xs' },
  },
  family: {
    heading: { fontFamily: 'heading' },
    body: { fontFamily: 'body' },
    mono: {
      fontFamily: 'mono',
      fontVariationSettings: '"CRSV" 0, "CASL" 0, "MONO" 1',
    },
  },
  bold: {
    true: {
      fontWeight: 'bold',
    },
  },
  italic: {
    true: {
      fontStyle: 'italic',
      fontVariationSettings: '"CRSV" 0, "CASL" 0, "slnt" -15',
    },
  },
  underline: {
    true: {
      textDecoration: 'underline',
    },
  },
  size: fontSizes,
  weight: fontWeights,
};

const headingBase = {
  fontFamily: 'heading',
  fontWeight: 'black',
  color: { base: 'slate.90', _dark: 'slate.5' },
  lineHeight: 'default',
};

const headingVariants = {
  level: {
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
  outlineWidth: '2',
  outlineStyle: 'solid',
  outlineColor: 'transparent',
  outlineOffset: '1',
  width: 'fit-content',
  cursor: 'pointer',
  _hover: {
    color: { base: 'blue.40', _dark: 'blue.30' },
    backgroundImage: 'linear-gradient(90deg, currentColor 0% 100%)',
  },
  _focus: {
    borderRadius: '4',
    outlineColor: { base: 'slate.90', _dark: 'slate.0' },
  },
};

const linkVariants = {
  ...textVariants,
  _disabled: {
    true: {
      cursor: 'not-allowed',
      opacity: 0.4,
      pointerEvents: 'none',
    },
  },
};

const labelBase = {
  fontSize: '14',
  fontWeight: 'normal',
  lineHeight: 'normal',
  cursor: 'default',
};

//Copied linkvarients, don't have styles defined for this yet
const labelVariants = {
  ...textVariants,
  _disabled: {
    true: {
      cursor: 'not-allowed',
      opacity: 0.7,
      pointerEvents: 'none',
    },
  },
};

export const textRecipe = defineRecipe({
  className: 'text',
  jsx: ['Text'],
  base: textBase,
  variants: textVariants,
  defaultVariants: {
    textStyle: 'body-md',
  },
});

export const headingRecipe = defineRecipe({
  className: 'heading',
  jsx: ['Heading'],
  base: headingBase,
  variants: headingVariants,
  defaultVariants: {
    level: 'h2',
  },
});

export const linkRecipe = defineRecipe({
  className: 'link',
  jsx: ['Link'],
  base: linkBase,
  variants: linkVariants,
  defaultVariants: {
    family: 'body',
  },
});

export const labelRecipe = defineRecipe({
  className: 'label',
  jsx: ['Label'],
  base: labelBase,
  variants: labelVariants,
  defaultVariants: {
    family: 'body',
  },
});
