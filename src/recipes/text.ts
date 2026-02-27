import { defineRecipe } from '@pandacss/dev';
import { globalBaseStyles } from '../styles/utilities';
import {
  fontSizes as fontSizeTokens,
  fontWeights as fontWeightTokens,
} from '../styles/primitives';
import { fontVariants } from '../styles/utilities';

const textBase = {
  ...globalBaseStyles,
  fontFamily: 'body',
  fontVariationSettings: fontVariants.body,
  fontWeight: 'normal',
  lineHeight: 'default',
  color: 'text.subtlest',
  margin: '0',
  fontSize: '16',
  maxWidth: 'prose',
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
  family: {
    heading: { fontFamily: 'heading' },
    body: {
      fontFamily: 'body',
      // fontVariationSettings: fontVariants.body,
    },
    mono: {
      fontFamily: 'mono',
      fontVariationSettings: fontVariants.mono,
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
      fontVariationSettings: fontVariants['body-italic'],
    },
  },
  underline: {
    true: {
      textDecoration: 'underline',
    },
  },
  truncate: {
    true: {
      display: 'block',
      width: 'full',
      maxWidth: 'full',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  },
  allCaps: {
    true: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: 'widest',
    },
  },
  size: fontSizes,
  weight: fontWeights,
};

const headingBase = {
  fontFamily: 'heading',
  fontWeight: 'black',
  color: 'text',
  lineHeight: 'default',
};

const headingVariants = {
  level: {
    h1: { textStyle: 'heading.lg' },
    h2: { textStyle: 'heading.md' },
    h3: { textStyle: 'heading.sm' },
    h4: { textStyle: 'heading.xs' },
  },
  allCaps: {
    true: {
      textTransform: 'uppercase',
      letterSpacing: 'widest',
    },
  },
};

const linkBase = {
  display: 'inline-flex',
  alignItems: 'center',
  fontWeight: 'medium',
  gap: '1',
  color: 'link',
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
    color: 'link',
    backgroundImage: 'linear-gradient(90deg, currentColor 0% 100%)',
    textDecoration: 'underline',
  },
  _focus: {
    borderRadius: '4',
    outlineColor: 'border.focused',
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
  fontSize: '16',
  fontWeight: 'normal',
  lineHeight: 'tight',
  cursor: 'default',
  color: 'text',
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
