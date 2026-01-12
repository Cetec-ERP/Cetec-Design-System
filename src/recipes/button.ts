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
        _disabled: {
          bg: 'bg.disabled',
          color: 'text.disabled',
          icon: { fill: 'icon.disabled' },
          _hover: {
            bg: 'bg.disabled',
            color: 'text.disabled',
            icon: { fill: 'icon.disabled' },
          },
        },
      },
      icon: { color: 'icon.decorative' },
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
        _disabled: {
          bg: 'bg.neutral.inverse.subtle',
          color: 'text.disabled',
          icon: { fill: 'icon.decorative' },
          _hover: {
            bg: 'bg.neutral.inverse.subtle',
            color: 'text.disabled',
            icon: { fill: 'icon.decorative' },
          },
        },
      },
      icon: { color: 'icon.decorative.inverse' },
    },
    hollow: {
      container: {
        bg: 'bg.neutral.subtle',
        borderColor: 'border',
        color: 'text',
        icon: { fill: 'icon.decorative' },
        _hover: {
          bg: 'bg.neutral.subtle.hovered',
          icon: { fill: 'icon.decorative.hovered' },
        },
        _active: {
          bg: 'bg.neutral.subtle.pressed',
          icon: { fill: 'icon.decorative.hovered' },
        },
        _disabled: {
          bg: 'bg.neutral.subtle',
          color: 'text.disabled',
          borderColor: 'border.disabled',
          icon: { fill: 'icon.disabled' },
          _hover: {
            bg: 'bg.neutral.subtle',
            color: 'text.disabled',
            borderColor: 'border.disabled',
            icon: { fill: 'icon.disabled' },
          },
        },
      },
      icon: { color: 'icon.decorative' },
    },
    ghost: {
      container: {
        bg: 'bg.neutral.subtle',
        color: 'text',
        icon: { fill: 'icon.decorative' },
        _hover: {
          bg: 'bg.neutral.subtle.hovered',
          icon: { fill: 'icon.decorative.hovered' },
        },
        _active: {
          bg: 'bg.neutral.subtle.pressed',
          icon: { fill: 'icon.decorative.hovered' },
        },
        _disabled: {
          bg: 'bg.neutral.subtle',
          color: 'text.disabled',
          borderColor: 'transparent',
          icon: { fill: 'icon.disabled' },
          _hover: {
            bg: 'bg.neutral.subtle',
            color: 'text.disabled',
            borderColor: 'transparent',
            icon: { fill: 'icon.disabled' },
          },
        },
      },
      icon: { color: 'icon.decorative' },
    },
    cta: {
      container: {
        bg: 'bg.cta.bold',
        color: 'text.cta.inverse',
        icon: { fill: 'icon.cta' },
        _hover: {
          bg: 'bg.cta.bold.hovered',
          icon: { fill: 'icon.cta.hovered' },
        },
        _active: {
          bg: 'bg.cta.bold.pressed',
          icon: { fill: 'icon.cta.hovered' },
        },
        _disabled: {
          bg: 'bg.cta',
          color: 'text.disabled',
          borderColor: 'transparent',
          icon: { fill: 'icon.disabled' },
          _hover: {
            bg: 'bg.cta',
            color: 'text.disabled',
            borderColor: 'transparent',
            icon: { fill: 'icon.disabled' },
          },
        },
      },
      icon: { color: 'icon.cta' },
    },
    danger: {
      container: {
        bg: 'bg.danger.bold',
        color: 'text.danger.inverse',
        icon: { fill: 'icon.danger.inverse' },
        _hover: {
          bg: 'bg.danger.bold.hovered',
          icon: { fill: 'icon.inverse' },
        },
        _active: {
          bg: 'bg.danger.bold.pressed',
          icon: { fill: 'icon.inverse' },
        },
        _disabled: {
          bg: 'bg.danger',
          color: 'text.danger.inverse',
          borderColor: 'transparent',
          icon: { fill: 'icon.disabled' },
          _hover: {
            bg: 'bg.danger',
            color: 'text.danger.inverse',
            borderColor: 'transparent',
            icon: { fill: 'icon.disabled' },
          },
        },
      },
      icon: { color: 'icon.danger.inverse' },
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
      md: {
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
      xl: {
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
      lg: {
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
      sm: {
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
    iconBefore: {
      true: { container: {} },
    },
    iconAfter: {
      true: { container: {} },
    },
  },
  compoundVariants: [
    {
      size: 'md',
      iconBefore: true,
      css: {
        container: { ps: '3' },
      },
    },
    {
      size: 'md',
      iconAfter: true,
      css: {
        container: { pe: '3' },
      },
    },
    {
      size: 'sm',
      iconBefore: true,
      css: {
        container: { ps: '2' },
      },
    },
    {
      size: 'sm',
      iconAfter: true,
      css: {
        container: { pe: '2' },
      },
    },
    {
      size: 'lg',
      iconBefore: true,
      css: {
        container: { ps: '5' },
      },
    },
    {
      size: 'lg',
      iconAfter: true,
      css: {
        container: { pe: '5' },
      },
    },
    {
      size: 'xl',
      iconBefore: true,
      css: {
        container: { ps: '7' },
      },
    },
    {
      size: 'xl',
      iconAfter: true,
      css: {
        container: { pe: '7' },
      },
    },
  ],
  defaultVariants: {
    variant: 'standard',
    size: 'md',
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
      md: {
        container: {
          fontSize: '16',
          p: '3',
        },
        icon: {
          w: '24',
          h: '24',
        },
      },
      xl: {
        container: {
          fontSize: '20',
          p: '9',
        },
        icon: {
          w: '28',
          h: '28',
        },
      },
      lg: {
        container: {
          fontSize: '16',
          p: '7',
        },
        icon: {
          w: '24',
          h: '24',
        },
      },
      sm: {
        container: {
          fontSize: '14',
          p: '1',
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
    size: 'md',
  },
});
