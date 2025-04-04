import { defineRecipe } from '@pandacss/dev';

const buttonBase = {
  position: 'relative',
  appearance: 'none',
  minWidth: '0',
  transitionDuration: 'fast',
  transitionProperty: 'background, border-color, color, box-shadow',
  transitionTimingFunction: 'default',
  userSelect: 'none',
  verticalAlign: 'middle',
  display: 'flex',
  alignItems: 'center',
  gap: '4',
  fontFamily: 'sans',
  fontSize: '16',
  fontWeight: 'medium',
  lineHeight: '24',
  borderWidth: '1',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: '4',
  outlineWidth: '2',
  outlineStyle: 'solid',
  outlineColor: 'transparent',
  outlineOffset: '1',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  _focusVisible: {
    outlineColor: { base: 'slate.80', _dark: 'slate.5' },
  },
  '& svg': {
    fill: 'current',
  },
};

const buttonVariants = {
  variant: {
    primary: {
      bg: { base: 'slate.90', _dark: 'slate.5' },
      color: { base: 'slate.0', _dark: 'slate.90' },
      _hover: {
        bg: { base: 'slate.70', _dark: 'slate.10' },
      },
      _active: {
        bg: { base: 'slate.100', _dark: 'slate.20' },
      },
      _disabled: {
        _hover: {
          bg: { base: 'slate.90', _dark: 'slate.5' },
        },
      },
      _selected: {
        bg: { base: 'slate.5', _dark: 'slate.90' },
        color: { base: 'slate.90', _dark: 'slate.0' },
      },
    },
    standard: {
      bg: { base: 'slate.5', _dark: 'slate.70' },
      color: { base: 'slate.90', _dark: 'slate.0' },
      _hover: {
        bg: { base: 'slate.10', _dark: 'slate.60' },
      },
      _active: {
        bg: { base: 'slate.20', _dark: 'slate.80' },
      },
      _disabled: {
        _hover: {
          bg: { base: 'slate.5', _dark: 'slate.70' },
        },
      },
      _selected: {
        bg: { base: 'slate.90', _dark: 'slate.5' },
        color: { base: 'slate.0', _dark: 'slate.90' },
      },
    },
    hollow: {
      bg: 'transparent',
      borderColor: { base: 'slate.30', _dark: 'slate.60' },
      color: { base: 'slate.90', _dark: 'slate.0' },
      _hover: {
        bg: { base: 'slate.10', _dark: 'slate.60' },
        borderColor: { base: 'slate.10', _dark: 'slate.60' },
      },
      _active: {
        bg: { base: 'slate.20', _dark: 'slate.80' },
        borderColor: { base: 'slate.20', _dark: 'slate.80' },
      },
      _disabled: {
        _hover: {
          bg: 'transparent',
        },
      },
      _selected: {
        bg: { base: 'slate.90', _dark: 'slate.5' },
        color: { base: 'slate.0', _dark: 'slate.90' },
        borderColor: 'transparent',
      },
    },
    ghost: {
      bg: 'transparent',
      color: { base: 'slate.90', _dark: 'slate.0' },
      _hover: {
        bg: { base: 'slate.10', _dark: 'slate.60' },
      },
      _active: {
        bg: { base: 'slate.20', _dark: 'slate.70' },
      },
      _disabled: {
        _hover: {
          bg: 'transparent',
        },
      },
      _selected: {
        bg: { base: 'slate.90', _dark: 'slate.5' },
        color: { base: 'slate.0', _dark: 'slate.90' },
      },
    },
    cta: {
      bg: { base: 'gold.20', _dark: 'gold.30' },
      color: 'slate.90',
      _hover: {
        bg: { base: 'gold.10', _dark: 'gold.20' },
      },
      _active: {
        bg: { base: 'gold.30', _dark: 'gold.40' },
      },
      _disabled: {
        _hover: {
          bg: { base: 'gold.20', _dark: 'gold.30' },
        },
      },
    },
    danger: {
      bg: 'red.50',
      color:  'slate.0',
      _hover: {
        bg: 'red.40',
      },
      _active: {
        bg: 'red.60',
      },
      _disabled: {
        _hover: {
          bg: 'red.50',
        },
      },
    },
  },
};

export const buttonRecipe = defineRecipe({
  className: 'button',
  jsx: ['Button'],
  base: buttonBase,
  variants: {
    ...buttonVariants,
    size: {
      medium: {
        fontSize: '16',
        py: '4',
        px: '12',
      },
      large: {
        fontSize: '16',
        py: '8',
        px: '16',
      },
      small: {
        fontSize: '14',
        py: '1',
        px: '8',
        lineHeight: '22',
      },
    },
  },
  defaultVariants: {
    variant: 'standard',
    size: 'medium',
  },
});

export const iconButtonRecipe = defineRecipe({
  className: 'icon-button',
  jsx: ['IconButton'],
  base: buttonBase,
  variants: {
    ...buttonVariants,
    size: {
      medium: {
        fontSize: '16',
        p: '3',
      },
      large: {
        fontSize: '16',
        p: '7',
      },
      small: {
        fontSize: '14',
        p: '1',
      },
    },
  },
  defaultVariants: {
    variant: 'standard',
    size: 'medium',
  },
});
