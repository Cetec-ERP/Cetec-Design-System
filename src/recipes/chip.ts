import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

const chipBase = {
  container: {
    ...globalBaseStyles,
    '--with-item-padding': 'token(sizes.2)',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    appearance: 'none',
    width: 'fit',
    borderRadius: '999',
    fontFamily: 'body',
    lineHeight: 'default',
    fontWeight: 'medium',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transitionDuration: 'fast',
    transitionProperty: 'background, color',
    transitionTimingFunction: 'default',
    userSelect: 'none',
    border: 'none',
    outlineWidth: '2',
    outlineStyle: 'solid',
    outlineColor: 'transparent',
    bg: 'bg.neutral',
    color: 'text',
    _hover: {
      bg: 'bg.neutral.hovered',
    },
    _active: {
      bg: 'bg.neutral.pressed',
    },
    _focusVisible: {
      outlineColor: 'border.focused',
    },
    _loading: {
      cursor: 'wait',
      animation: 'pulse',
    },
    _deleted: {
      textDecoration: 'line-through',
      cursor: 'not-allowed',
      opacity: '[0.6]',
    },
    _disabled: {
      cursor: 'not-allowed',
      bg: 'bg.disabled',
      color: 'text.disabled',
      borderColor: 'border.disabled',
      _hover: {
        bg: 'bg.disabled',
        color: 'text.disabled',
        borderColor: 'border.disabled',
        chipIcon: { fill: 'icon.disabled' },
      },
    },
    _selected: {
      bg: 'bg.neutral.boldest',
      color: 'text.inverse',
      _hover: {
        bg: 'bg.neutral.bold.hovered',
      },
      _active: {
        bg: 'bg.neutral.bold.pressed',
      },
    },
  },
  chipIcon: {
    fill: 'icon.decorative',
    aspectRatio: 'square',
    transitionDuration: 'fast',
    transitionProperty: 'fill',
    transitionTimingFunction: 'default',
    _groupHover: { fill: 'icon.decorative.hovered' },
    _groupActive: { fill: 'icon.decorative.hovered' },
    _groupDisabled: { fill: 'icon.decorative' },

    '[data-selected=true] &': {
      fill: 'icon.decorative.inverse',
    },
    '.group:is(:hover, [data-hover])[data-selected=true] &': {
      fill: 'icon.decorative.inverse.hovered',
    },
  },
};

export const chipRecipe = defineSlotRecipe({
  className: 'chip',
  jsx: ['Chip'],
  slots: ['container', 'chipIcon'],
  base: chipBase,
  variants: {
    size: {
      sm: {
        container: {
          '--with-item-padding': 'token(sizes.2)',
          gap: '2',
          h: '20',
          px: '6',
          py: '0',
          fontSize: '14',
        },
        chipIcon: {
          w: '20',
          h: '20',
          flexShrink: '0',
        },
      },
      md: {
        container: {
          '--with-item-padding': 'token(sizes.2)',
          gap: '4',
          h: '24',
          px: '8',
          py: '1',
          fontSize: '14',
        },
        chipIcon: {
          w: '20',
          h: '20',
          flexShrink: '0',
        },
      },
      lg: {
        container: {
          '--with-item-padding': 'token(sizes.4)',
          gap: '4',
          h: '32',
          px: '10',
          py: '4',
          fontSize: '16',
        },
        chipIcon: {
          w: '24',
          h: '24',
          flexShrink: '0',
        },
      },
    },
    before: {
      true: {
        container: {
          ps: 'var(--with-item-padding)',
        },
      },
    },
    after: {
      true: {
        container: {
          pe: 'var(--with-item-padding)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
