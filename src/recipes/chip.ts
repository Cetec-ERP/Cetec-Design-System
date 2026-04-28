import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

export const chipRecipe = defineSlotRecipe({
  className: 'chip',
  jsx: ['Chip'],
  slots: [
    'container',
    'body',
    'innerWrapper',
    'dismissButton',
    'beforeSlot',
    'afterSlot',
    'chipIcon',
    'chipBadge',
    'chipAvatar',
  ],
  base: {
    container: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'stretch',
      width: 'fit',
      borderRadius: '999',
      bg: 'bg.neutral',
      fontFamily: 'body',
      lineHeight: 'default',
      fontWeight: 'medium',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      userSelect: 'none',
      // overflow: 'hidden',
      _loading: {
        animation: 'pulse',
      },
      // '&:has([class*="__body"]:focus-visible)': {
      //   outlineWidth: '2',
      //   outlineStyle: 'solid',
      //   outlineColor: 'border.focused',
      // },
      '&:has([data-selected=true])': {
        bg: 'bg.neutral.boldest',
        color: 'text.inverse',
      },
      _disabled: {
        cursor: 'not-allowed',
        bg: 'bg.disabled',
        color: 'text.disabled',
        opacity: '[0.3]',
      },
      '.group:disabled &': {
        cursor: 'not-allowed',
        bg: 'bg.disabled',
        color: 'text.disabled',
        opacity: '[0.3]',
      },
    },
    body: {
      ...globalBaseStyles,
      '--slotItem-margin': 'token(sizes.2)',
      '--chipIcon-margin': 'var(--slotItem-margin)',
      '--chipBadge-margin': 'var(--slotItem-margin)',
      '--chipAvatar-margin': 'token(sizes.6)',
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      appearance: 'none',
      minW: '0',
      border: 'none',
      borderRadius: '999',
      outlineWidth: '2',
      outlineStyle: 'solid',
      outlineColor: 'transparent',
      outlineOffset: 'calc(token(sizes.2) * -1)',
      color: 'text',
      // bg: 'bg.neutral',
      cursor: 'pointer',
      transitionDuration: 'fast',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      _hover: {
        bg: 'bg.neutral.hovered',
      },
      _active: {
        bg: 'bg.neutral.pressed',
      },
      _focusVisible: {
        outlineColor: 'border.focused',
      },
      // _disabled: {
      //   cursor: 'not-allowed',
      //   bg: 'bg.disabled',
      //   color: 'text.disabled',
      // },
      // '&[data-disabled=true]': {
      //   cursor: 'default',
      //   bg: 'bg.disabled',
      //   color: 'text.disabled',
      // },
      '&[data-deleted=true]': {
        textDecoration: 'line-through',
        opacity: '[0.6]',
      },
      '&[data-selected=true]': {
        bg: 'bg.neutral.boldest',
        color: 'text.inverse',
      },
      '&[data-selected=true]:is(:hover, [data-hover])': {
        bg: 'bg.neutral.bold.hovered',
      },
      '&[data-selected=true]:is(:active, [data-active])': {
        bg: 'bg.neutral.bold.pressed',
      },
    },
    innerWrapper: {
      display: 'flex',
      alignItems: 'center',
      color: 'text',
      '[data-selected=true] &': {
        color: 'text.inverse',
      },
    },
    dismissButton: {
      ...globalBaseStyles,
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      appearance: 'none',
      aspectRatio: 'square',
      border: 'none',
      borderRadius: '999',
      outlineWidth: '2',
      outlineStyle: 'solid',
      outlineColor: 'transparent',
      outlineOffset: 'calc(token(sizes.2) * -1)',
      color: 'text',
      // bg: 'bg.neutral',
      cursor: 'pointer',
      transitionDuration: 'fast',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      _hover: {
        bg: 'bg.neutral.hovered',
      },
      _active: {
        bg: 'bg.neutral.pressed',
      },
      _focusVisible: {
        outlineColor: 'border.focused',
      },
      // _disabled: {
      //   cursor: 'not-allowed',
      //   bg: 'bg.disabled',
      //   color: 'text.disabled',
      // },
      '&[data-deleted=true]': {
        opacity: '[0.6]',
      },
      '&[data-selected=true]': {
        bg: 'bg.neutral.boldest',
        color: 'text.inverse',
      },
      '&[data-selected=true]:is(:hover, [data-hover])': {
        bg: 'bg.neutral.bold.hovered',
      },
      '&[data-selected=true]:is(:active, [data-active])': {
        bg: 'bg.neutral.bold.pressed',
      },
    },
    beforeSlot: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    afterSlot: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    chipIcon: {
      fill: 'icon.decorative',
      aspectRatio: 'square',
      flexShrink: '0',
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
      // '[data-disabled=true] &': {
      //   fill: 'icon.disabled',
      // },
      // '.group:disabled &': {
      //   fill: 'icon.disabled',
      // },
    },
  },
  variants: {
    size: {
      sm: {
        body: {
          '--slotItem-margin': 'token(sizes.2)',
          '--chipAvatar-margin': 'token(sizes.4)',
          h: '20',
          px: '6',
          py: '0',
          fontSize: '14',
        },
        innerWrapper: {
          gap: '3',
        },
        dismissButton: {
          h: '20',
          // px: '4',
        },
        chipIcon: {
          w: '20',
        },
      },
      md: {
        body: {
          '--slotItem-margin': 'token(sizes.4)',
          '--chipAvatar-margin': 'token(sizes.6)',
          h: '24',
          px: '8',
          py: '1',
          fontSize: '14',
        },
        innerWrapper: {
          gap: '5',
        },
        dismissButton: {
          h: '24',
          // px: '6',
        },
        chipIcon: {
          w: '20',
        },
      },
      lg: {
        body: {
          '--slotItem-margin': 'token(sizes.6)',
          '--chipAvatar-margin': 'token(sizes.8)',
          h: '32',
          px: '10',
          py: '4',
          fontSize: '16',
        },
        innerWrapper: {
          gap: '8',
        },
        dismissButton: {
          h: '32',
          // px: '8',
        },
        chipIcon: {
          w: '24',
        },
      },
    },
    before: {
      true: {
        beforeSlot: {},
      },
    },
    after: {
      true: {
        afterSlot: {},
      },
    },
    beforeKind: {
      icon: {
        beforeSlot: {
          ms: 'calc(var(--chipIcon-margin) * -1)',
        },
      },
      avatar: {
        beforeSlot: {
          ms: 'calc(var(--chipAvatar-margin) * -1)',
        },
      },
      badge: {
        beforeSlot: {
          ms: 'calc(var(--chipBadge-margin) * -1)',
        },
      },
      check: {
        beforeSlot: {
          ms: 'calc(var(--chipIcon-margin) * -1)',
        },
      },
    },
    afterKind: {
      icon: {
        afterSlot: {
          me: 'calc(var(--chipIcon-margin) * -1)',
        },
      },
      badge: {
        afterSlot: {
          me: 'calc(var(--chipBadge-margin) * -1)',
        },
      },
    },
    dismissable: {
      true: {
        body: {
          // borderTopRightRadius: '0',
          // borderBottomRightRadius: '0',
        },
        dismissButton: {
          // borderTopLeftRadius: '0',
          // borderBottomLeftRadius: '0',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
