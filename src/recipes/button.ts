import { defineSlotRecipe } from '@pandacss/dev';

const buttonBaseStyles = {
  container: {
    position: 'relative',
    appearance: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '4',
    minWidth: '0',
    width: 'fit',
    height: 'fit',
    transitionDuration: 'fast',
    transitionProperty: 'background, border-color, color, box-shadow',
    transitionTimingFunction: 'default',
    userSelect: 'none',
    verticalAlign: 'middle',
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
      cursor: 'not-allowed',
      bg: 'bg.disabled',
      color: 'text.disabled',
      borderColor: 'border.disabled',
      icon: { fill: 'icon.disabled' },
      _hover: {
        bg: 'bg.disabled',
        color: 'text.disabled',
        borderColor: 'border.disabled',
        icon: { fill: 'icon.disabled' },
      },
    },
    _focusVisible: {
      outlineColor: 'border.focused',
    },
  },
  icon: {
    aspectRatio: 'square',
    transitionDuration: 'fast',
    transitionProperty: 'fill',
    transitionTimingFunction: 'default',
  },
};

const buttonVariants = {
  variant: {
    standard: {
      container: {
        bg: 'bg.neutral',
        color: 'text',
        icon: { fill: 'icon.decorative' },
        _hover: {
          bg: 'bg.neutral.hovered',
          icon: { fill: 'icon.decorative.hovered' },
        },
        _active: {
          bg: 'bg.neutral.pressed',
          icon: { fill: 'icon.decorative.hovered' },
        },
      },
    },
    primary: {
      container: {
        bg: 'bg.neutral.boldest',
        color: 'text.inverse',
        icon: { fill: 'icon.decorative.inverse' },
        _hover: {
          bg: 'bg.neutral.bold.hovered',
          icon: { fill: 'icon.decorative.inverse.hovered' },
        },
        _active: {
          bg: 'bg.neutral.bold.pressed',
          icon: { fill: 'icon.decorative.inverse.hovered' },
        },
      },
      hollow: {
        container: {
          bg: 'bg.neutral.subtle',
          borderColor: 'border',
          color: 'text.subtle',
          icon: { fill: 'icon.decorative' },
          _hover: {
            bg: 'bg.neutral.subtle.hovered',
            icon: { fill: 'icon.decorative.hovered' },
          },
          _active: {
            bg: 'bg.neutral.subtle.pressed',
            icon: { fill: 'icon.decorative.hovered' },
          },
        },
      },
      ghost: {
        container: {
          bg: 'bg.neutral.subtle',
          color: 'text.subtle',
          icon: { fill: 'icon.decorative' },
          _hover: {
            bg: 'bg.neutral.subtle.hovered',
            icon: { fill: 'icon.decorative.hovered' },
          },
          _active: {
            bg: 'bg.neutral.subtle.pressed',
            icon: { fill: 'icon.decorative.hovered' },
          },
        },
      },
      cta: {
        container: {
          bg: { base: 'gold.20', _dark: 'gold.30' },
          color: 'slate.90',
          _hover: {
            bg: { base: 'gold.10', _dark: 'gold.20' },
          },
          _active: {
            bg: { base: 'gold.30', _dark: 'gold.40' },
          },
        },
      },
      danger: {
        container: {
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
  },
};

export const buttonRecipe = defineSlotRecipe({
  className: 'button',
  jsx: ['Button'],
  slots: ['container', 'icon'],
  base: buttonBaseStyles,
  variants: {
    ...buttonVariants,
    size: {
      medium: {
        container: {
          fontSize: '16',
          py: '3',
          px: '12',
        },
        icon: {
          w: '24',
          h: '24',
        },
      },
      xlarge: {
        container: {
          fontSize: '20',
          py: '9',
          px: '16',
        },
        icon: {
          w: '28',
          h: '28',
        },
      },
      large: {
        container: {
          fontSize: '16',
          py: '7',
          px: '14',
        },
        icon: {
          w: '24',
          h: '24',
        },
      },
      small: {
        container: {
          fontSize: '14',
          py: '1',
          px: '8',
        },
        icon: {
          w: '22',
          h: '22',
        },
      },
    },
    before: {
      true: { container: {} },
    },
    after: {
      true: { container: {} },
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
  slots: ['container', 'icon'],
  base: buttonBaseStyles,
  variants: {
    ...buttonVariants,
    size: {
      medium: {
        container: {
          fontSize: '16',
          py: '3',
          px: '12',
        },
        icon: {
          w: '24',
          h: '24',
        },
      },
      xlarge: {
        container: {
          fontSize: '20',
          py: '9',
          px: '16',
        },
        icon: {
          w: '28',
          h: '28',
        },
      },
      large: {
        container: {
          fontSize: '16',
          py: '7',
          px: '14',
        },
        icon: {
          w: '24',
          h: '24',
        },
      },
      small: {
        container: {
          fontSize: '14',
          py: '1',
          px: '8',
        },
        icon: {
          w: '22',
          h: '22',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'standard',
    size: 'medium',
  },
});
