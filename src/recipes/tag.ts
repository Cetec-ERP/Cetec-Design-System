import { defineRecipe } from '@pandacss/dev';

const tagBase = {
  display: 'flex',
  py: '0',
  borderRadius: '2',
  gap: '1',
  //   h: '20',
  px: '4',
  fontSize: '14',
  fontWeight: '500',
  //   lineHeight: 'none',
};
const tagVariant = {
  variant: {
    default: {},
    bold: {},
  },
  hue: {
    slate: {},
    tan: {},
    red: {},
    tomato: {},
    orange: {},
    yellow: {},
    green: {},
    grass: {},
    mint: {},
    cyan: {},
    blue: {},
    indigo: {},
    purple: {},
    violet: {},
    pink: {},
    rose: {},
    magenta: {},
  },
  iconPosition: {
    left: {
      flexDirection: "row",
      gap: "1",
      pl: "1",
    },
    right: {
      flexDirection: "row-reverse",
      gap: "1",
      pr: "1",
    },
  },
  hasIcon:{
    true:{

    },
    false:{
        px: 4,
    }
  }
};

export const tagRecipe = defineRecipe({
  className: 'tag',
  jsx: ['Tag'],
  base: tagBase,
  variants: tagVariant,
  defaultVariants: {
    variant: 'default',
    hue: 'slate',
    iconPosition: "left",
    hasIcon: false,
  },
  compoundVariants: [
    {
      hue: 'slate',
      variant: 'default',
      css: {
        color: { base: 'slate.70', _dark: 'slate.20' },
        bg: { base: 'slate.10', _dark: 'slate.70' },
      },
    },
    {
      hue: 'slate',
      variant: 'bold',
      css: {
        color: { base: 'slate.0', _dark: 'slate.80' },
        bg: { base: 'slate.50', _dark: 'slate.20' },
      },
    },
    {
      hue: 'tan',
      variant: 'default',
      css: {
        color: { base: 'tan.70', _dark: 'tan.20' },
        bg: { base: 'tan.10', _dark: 'tan.70' },
      },
    },
    {
      hue: 'tan',
      variant: 'bold',
      css: {
        color: { base: 'slate.0', _dark: 'tan.80' },
        bg: { base: 'tan.50', _dark: 'tan.20' },
      },
    },
    {
      hue: 'red',
      variant: 'default',
      css: {
        color: { base: 'red.70', _dark: 'red.10' },
        bg: { base: 'red.10', _dark: 'red.70' },
      },
    },
    {
      hue: 'red',
      variant: 'bold',
      css: {
        color: { base: 'slate.0', _dark: 'red.80' },
        bg: { base: 'red.50', _dark: 'red.20' },
      },
    },
    {
      hue: 'tomato',
      variant: 'default',
      css: {
        color: { base: 'orange.70', _dark: 'orange.20' },
        bg: { base: 'orange.10', _dark: 'orange.70' },
      },
    },
    {
      hue: 'tomato',
      variant: 'bold',
      css: {
        color: { base: 'slate.0', _dark: 'orange.80' },
        bg: { base: 'orange.50', _dark: 'orange.20' },
      },
    },
    // Orange hex color not any token match with figma
    {
      hue: 'orange',
      variant: 'default',
      css: {
        color: { base: 'orange.70', _dark: 'orange.20' },
        bg: { base: 'orange.10', _dark: 'orange.70' },
      },
    },
    {
      hue: 'orange',
      variant: 'bold',
      css: {
        color: { base: 'slate.0', _dark: 'orange.80' },
        bg: { base: 'orange.50', _dark: 'orange.20' },
      },
    },
    // Orange hex color not any token match with figma
    {
      hue: 'yellow',
      variant: 'default',
      css: {
        color: { base: 'yellow.60', _dark: 'yellow.10' },
        bg: { base: 'yellow.10', _dark: 'yellow.60' },
      },
    },
    {
      hue: 'yellow',
      variant: 'bold',
      css: {
        color: { base: 'yellow.70', _dark: 'yellow.90' },
        bg: { base: 'yellow.20', _dark: 'yellow.20' },
      },
    },
    {
        hue: 'green',
        variant: 'default',
        css: {
          color: { base: 'green.70', _dark: 'green.20' },
          bg: { base: 'green.10', _dark: 'green.70' },
        },
      },
      {
        hue: 'green',
        variant: 'bold',
        css: {
          color: { base: 'slate.0', _dark: 'green.80' },
          bg: { base: 'green.50', _dark: 'green.20' },
        },
      },
      {
        hue: 'grass',
        variant: 'default',
        css: {
          color: { base: 'green.70', _dark: 'green.20' },
          bg: { base: 'green.10', _dark: 'green.70' },
        },
      },
      {
        hue: 'grass',
        variant: 'bold',
        css: {
          color: { base: 'slate.0', _dark: 'green.80' },
          bg: { base: 'green.50', _dark: 'green.20' },
        },
      },
      {
        hue: 'cyan',
        variant: 'default',
        css: {
          color: { base: 'cyan.70', _dark: 'cyan.20' },
          bg: { base: 'cyan.10', _dark: 'cyan.70' },
        },
      },
      {
        hue: 'cyan',
        variant: 'bold',
        css: {
          color: { base: 'cyan.5', _dark: 'cyan.80' },
          bg: { base: 'cyan.60', _dark: 'cyan.30' },
        },
      },
      {
        hue: 'blue',
        variant: 'default',
        css: {
          color: { base: 'blue.70', _dark: 'blue.20' },
          bg: { base: 'blue.10', _dark: 'blue.70' },
        },
      },
      {
        hue: 'blue',
        variant: 'bold',
        css: {
          color: { base: 'slate.0', _dark: 'blue.90' },
          bg: { base: 'blue.50', _dark: 'blue.40' },
        },
      },
  ],
});
