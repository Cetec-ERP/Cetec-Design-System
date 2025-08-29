import { defineSlotRecipe } from '@pandacss/dev';

const buttonBase = {
  root: {
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
    fontFamily: 'body',
    fontSize: '16',
    fontWeight: 'medium',
    lineHeight: 'default',
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
  },
  iconStart: {
    fill: 'current',
  },
  iconEnd: {
    fill: 'current',
  },
  icon: {
    fill: 'current',
  },
};

const buttonVariants = {
  variant: {
    primary: {
      root: {
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
    },
    standard: {
      root: {
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
    },
    hollow: {
      root: {
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
    },
    ghost: {
      root: {
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
    },
    cta: {
      root: {
        bg: 'gold.20',
        color: 'slate.90',
        _hover: {
          bg: 'gold.10',
        },
        _active: {
          bg: 'gold.30',
        },
        _disabled: {
          _hover: {
            bg: 'gold.20',
          },
        },
      },
    },
    danger: {
      root: {
        bg: 'red.50',
        color: 'slate.0',
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
  },
};

export const buttonRecipe = defineSlotRecipe({
  className: 'button',
  jsx: ['Button'],
  slots: ['root', 'iconStart', 'iconEnd'],
  base: buttonBase,
  variants: {
    ...buttonVariants,
    size: {
      medium: {
        root: {
          fontSize: '16',
          py: '3',
          px: '10',
        },
        iconStart: {
          marginStart: '-6',
          marginEnd: '-1',
        },
        iconEnd: {
          marginStart: '-1',
          marginEnd: '-6',
        },
      },
      large: {
        root: {
          fontSize: '16',
          py: '7',
          px: '12',
        },
        iconStart: {
          marginStart: '-7',
        },
        iconEnd: {
          marginEnd: '-7',
        },
      },
      small: {
        root: {
          fontSize: '14',
          py: '0',
          px: '8',
        },
        iconStart: {
          marginStart: '-6',
          marginEnd: '-1',
          fill: 'red.50',
        },
        iconEnd: {
          marginStart: '-1',
          marginEnd: '-6',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'standard',
    size: 'medium',
  },
});

export const iconButtonRecipe = defineSlotRecipe({
  className: 'icon-button',
  jsx: ['IconButton'],
  slots: ['root', 'icon'],
  base: buttonBase,
  variants: {
    ...buttonVariants,
    size: {
      medium: {
        root: {
          fontSize: '16',
          p: '3',
        },
      },
      large: {
        root: {
          fontSize: '16',
          p: '7',
        },
      },
      small: {
        root: {
          fontSize: '14',
          p: '0',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'standard',
    size: 'medium',
  },
});
