import { defineRecipe, SystemStyleObject } from '@pandacss/dev';
import { OneOrMore } from '@styled-system/types';

const textBase = {
  margin: '0',
  lineHeight: 'default',
  fontWeight: 'normal',
  fontSize: '16',
  color: { base: 'slate.70', _dark: 'slate.20' },
};

const textVariants = {
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
  size: {
    lg: {},
    md: {},
    sm: {},
    xs: {},
  },
};

export type TextSizes = "lg" | "md" | "sm" | "xs"

type TextCompoundVariants = {
  family?: OneOrMore<"heading" | "mono" | "body">;
  size?: OneOrMore<TextSizes>;
  css: SystemStyleObject;
};

const textCompoundVariants: TextCompoundVariants[] = [
  {
    family: 'heading',
    size: 'lg',
    css: { 
      fontWeight: 'black', 
      fontSize: '40',
      lineHeight: '48', 
      color: { 
        base: 'slate.90', 
        _dark: 'slate.5'
      } 
    },
  },
  {
    family: 'heading' ,
    size: 'md',
    css: { fontWeight: "black", fontSize: '32' },
  },
  {
    family: 'heading',
    size: 'sm',
    css: { fontWeight: "black", fontSize: '24' },
  },
  {
    family: 'heading',
    size: 'xs',
    css: { fontWeight: "black", fontSize: '20' },
  },
  {
    family: 'body',
    size: 'lg',
    css: { fontWeight: "normal", fontSize: '20' },
  },
  {
    family: 'body',
    size: 'md',
    css: { fontWeight: "normal", fontSize: '16' },
  },
  {
    family: ['body','mono'],
    size: 'sm',
    css: { fontWeight: "normal", fontSize: '14' },
  },
  {
    family: 'mono',
    size: 'xs',
    css: { fontWeight: "normal", fontSize: '12' },
  },
]

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
      opacity: '0.7',
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
      opacity: '0.7',
      pointerEvents: 'none',
    },
  },
};

export const textRecipe = defineRecipe({
  className: 'text',
  jsx: ['Text'],
  base: textBase,
  variants: textVariants,
  compoundVariants: textCompoundVariants,
  defaultVariants: {
    family: 'body',
    size: 'md'
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

