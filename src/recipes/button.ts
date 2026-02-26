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
      opacity: '0.3',
    },
    _loading: {
      cursor: 'not-allowed',
      opacity: '0.3',
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
        _hover: {
          bg: 'bg.neutral.hovered',
        },
        _active: {
          bg: 'bg.neutral.pressed',
        },
      },
      icon: {
        fill: 'icon.decorative',
        mixBlendMode: { base: 'multiply', _dark: 'screen' },
        _groupHover: { fill: 'current' },
        _groupActive: { fill: 'current' },
      },
    },
    primary: {
      container: {
        bg: 'bg.neutral.boldest',
        color: 'text.inverse',
        _hover: {
          bg: 'bg.neutral.bold.hovered',
        },
        _active: {
          bg: 'bg.neutral.bold.pressed',
        },
      },
      icon: {
        fill: 'icon.decorative.inverse',
        mixBlendMode: { base: 'screen', _dark: 'multiply' },
        _groupHover: { fill: 'current' },
        _groupActive: { fill: 'current' },
        _groupDisabled: {
          fill: 'current',
        },
      },
    },
    hollow: {
      container: {
        bg: 'bg.neutral.subtle',
        borderColor: 'border',
        color: 'text',
        _hover: {
          bg: 'bg.neutral.subtle.hovered',
        },
        _active: {
          bg: 'bg.neutral.subtle.pressed',
        },
      },
      icon: {
        fill: 'icon.decorative',
        mixBlendMode: { base: 'multiply', _dark: 'screen' },
        _groupHover: { fill: 'current' },
        _groupActive: { fill: 'current' },
      },
    },
    ghost: {
      container: {
        bg: 'bg.neutral.subtle',
        color: 'text',
        _hover: {
          bg: 'bg.neutral.subtle.hovered',
        },
        _active: {
          bg: 'bg.neutral.subtle.pressed',
        },
      },
      icon: {
        fill: 'icon.decorative',
        mixBlendMode: { base: 'multiply', _dark: 'screen' },
        _groupHover: { fill: 'current' },
        _groupActive: { fill: 'current' },
      },
    },
    cta: {
      container: {
        bg: 'gold.20',
        color: 'neutral.90',
        _hover: {
          bg: 'gold.15',
        },
        _active: {
          bg: 'gold.30',
        },
      },
      icon: {
        fill: 'neutral.50',
        mixBlendMode: 'multiply',
        _groupHover: { fill: 'current' },
        _groupActive: { fill: 'current' },
        _groupDisabled: {
          fill: 'current',
        },
      },
    },
    danger: {
      container: {
        bg: 'red.50',
        color: 'neutral.0',
        _hover: {
          bg: 'red.40',
        },
        _active: {
          bg: 'red.60',
        },
      },
      icon: {
        fill: 'neutral.40',
        mixBlendMode: 'screen',
        _groupHover: { fill: 'current' },
        _groupActive: { fill: 'current' },
        _groupDisabled: {
          fill: 'current',
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
  className: 'iconButton',
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
