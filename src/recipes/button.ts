import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

const buttonBaseStyles = {
  container: {
    ...globalBaseStyles,
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
    '--icon-size': 'token(sizes.24)',
    '--icon-margin-outside': 'token(sizes.6)',
    '--icon-margin-inside': 'token(sizes.1)',
    w: 'var(--icon-size)',
    aspectRatio: 'square',
    transitionDuration: 'fast',
    transitionProperty: 'fill',
    transitionTimingFunction: 'default',
  },
  iconBefore: {
    ms: 'calc(var(--icon-margin-outside) * -1)',
    me: 'calc(var(--icon-margin-inside) * -1)',
  },
  iconAfter: {
    ms: 'calc(var(--icon-margin-inside) * -1)',
    me: 'calc(var(--icon-margin-outside) * -1)',
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
        fill: 'icon.decorative.inverse.subtle',
        mixBlendMode: { base: 'screen', _dark: 'multiply' },
        _groupHover: { fill: 'icon.decorative.inverse' },
        _groupActive: { fill: 'icon.decorative.inverse' },
        _groupDisabled: {
          fill: 'icon.decorative.inverse.subtle',
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
        fill: 'icon.decorative.inverse',
        mixBlendMode: 'screen',
        _groupHover: { fill: 'icon.decorative.inverse' },
        _groupActive: { fill: 'icon.decorative.inverse' },
        _groupDisabled: {
          fill: 'icon.decorative.inverse',
        },
      },
    },
    selected: {
      container: {
        bg: 'bg.selected',
        color: 'text.selected',
        icon: { fill: 'icon.selected' },
        _hover: {
          bg: 'bg.selected.hovered',
          color: 'text.selected.hovered',
          icon: { fill: 'icon.selected' },
        },
        _active: {
          bg: 'bg.selected.pressed',
          color: 'text.selected',
          icon: { fill: 'icon.selected' },
        },
      },
      icon: {
        fill: 'icon.selected',
        mixBlendMode: { base: 'multiply', _dark: 'screen' },
        _groupHover: { fill: 'icon.selected' },
        _groupActive: { fill: 'icon.selected' },
        _groupDisabled: {
          fill: 'icon.selected',
        },
      },
    },
    selectedBold: {
      container: {
        bg: 'bg.selected.bold',
        color: 'text.inverse',
        _hover: {
          bg: 'bg.selected.bold.hovered',
        },
        _active: {
          bg: 'bg.selected.bold.pressed',
        },
      },
      icon: {
        fill: 'icon.inverse',
        mixBlendMode: { base: 'screen', _dark: 'multiply' },
        _groupHover: { fill: 'icon.inverse' },
        _groupActive: { fill: 'icon.inverse' },
        _groupDisabled: {
          fill: 'icon.inverse',
        },
      },
    },
  },
};

export const buttonRecipe = defineSlotRecipe({
  className: 'button',
  jsx: ['Button'],
  slots: ['container', 'icon', 'iconBefore', 'iconAfter'],
  base: buttonBaseStyles,
  variants: {
    ...buttonVariants,
    size: {
      sm: {
        container: {
          fontSize: '14',
          py: '1',
          px: '8',
        },
        icon: {
          '--icon-size': 'token(sizes.22)',
          '--icon-margin-outside': 'token(sizes.5)',
          '--icon-margin-inside': 'token(sizes.1)',
        },
      },
      md: {
        container: {
          fontSize: '16',
          py: '3',
          px: '12',
        },
        icon: {
          '--icon-size': 'token(sizes.24)',
          '--icon-margin-outside': 'token(sizes.8)',
          '--icon-margin-inside': 'token(sizes.1)',
        },
      },
      lg: {
        container: {
          fontSize: '16',
          py: '7',
          px: '14',
        },
        icon: {
          '--icon-size': 'token(sizes.24)',
          '--icon-margin-outside': 'token(sizes.10)',
          '--icon-margin-inside': 'token(sizes.1)',
        },
      },
      xl: {
        container: {
          fontSize: '20',
          py: '9',
          px: '16',
        },
        icon: {
          '--icon-size': 'token(sizes.28)',
          '--icon-margin-outside': 'token(sizes.10)',
          '--icon-margin-inside': 'token(sizes.1)',
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
