import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

export const chipRecipe = defineSlotRecipe({
  className: 'chip',
  jsx: ['Chip'],
  slots: [
    'container',
    'innerWrapper',
    'chipIcon',
    'chipBadge',
    'chipAvatar',
    'slotItem',
  ],
  base: {
    container: {
      ...globalBaseStyles,
      '--slotItem-margin': 'token(sizes.2)',
      '--chipIcon-margin': 'var(--slotItem-margin)',
      '--chipBadge-margin': 'var(--slotItem-margin)',
      '--chipAvatar-margin': 'token(sizes.6)',
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
    innerWrapper: {
      display: 'flex',
      alignItems: 'center',
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
  },
  variants: {
    size: {
      sm: {
        container: {
          '--slotItem-margin': 'token(sizes.2)',
          '--chipAvatar-margin': 'token(sizes.4)',
          h: '20',
          px: '6',
          py: '0',
          fontSize: '14',
        },
        innerWrapper: {
          gap: '2',
        },
        chipIcon: {
          w: '20',
          h: '20',
          flexShrink: '0',
        },
      },
      md: {
        container: {
          '--slotItem-margin': 'token(sizes.4)',
          '--chipAvatar-margin': 'token(sizes.6)',
          h: '24',
          px: '8',
          py: '1',
          fontSize: '14',
        },
        innerWrapper: {
          gap: '4',
        },
        chipIcon: {
          w: '20',
          h: '20',
          flexShrink: '0',
        },
      },
      lg: {
        container: {
          '--slotItem-margin': 'token(sizes.6)',
          '--chipAvatar-margin': 'token(sizes.8)',
          h: '32',
          px: '10',
          py: '4',
          fontSize: '16',
        },
        innerWrapper: {
          gap: '4',
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
        slotItem: {
          ms: 'calc(var(--slotItem-margin) * -1)',
        },
        chipIcon: {
          ms: 'calc(var(--chipIcon-margin) * -1)',
        },
        chipBadge: {
          ms: 'calc(var(--chipBadge-margin) * -1)',
        },
        chipAvatar: {
          ms: 'calc(var(--chipAvatar-margin) * -1)',
        },
      },
    },
    after: {
      true: {
        slotItem: {
          me: 'calc(var(--slotItem-margin) * -1)',
        },
        chipIcon: {
          me: 'calc(var(--chipIcon-margin) * -1)',
        },
        chipBadge: {
          me: 'calc(var(--chipBadge-margin) * -1)',
        },
        chipAvatar: {
          me: 'calc(var(--chipAvatar-margin) * -1)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
