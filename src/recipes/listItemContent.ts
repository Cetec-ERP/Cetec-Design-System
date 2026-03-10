import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

export const listItemContentRecipe = defineSlotRecipe({
  className: 'listItemContent',
  jsx: ['ListItemContent'],
  slots: [
    'wrapper',
    'icon',
    'itemMain',
    'itemLabel',
    'itemDescription',
    'divider',
  ],
  base: {
    wrapper: {
      ...globalBaseStyles,
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'start',
      gap: '4',
      width: 'full',
      textAlign: 'left',
      color: 'text',
      bg: 'transparent',
      scrollSnapAlign: 'start',
      transitionDuration: 'fast',
      transitionProperty: 'color',
      transitionTimingFunction: 'default',
    },
    icon: {
      aspectRatio: 'square',
      transitionDuration: 'fast',
      transitionProperty: 'fill',
      transitionTimingFunction: 'default',
      flexShrink: '0',
    },
    itemMain: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
      minWidth: '0',
    },
    itemLabel: {
      color: 'text',
    },
    itemDescription: {
      color: 'text.subtlest',
      lineHeight: 'tight',
    },
    divider: {
      my: '4',
      mx: '12',
    },
  },
  variants: {
    variant: {
      default: {},
      checkbox: {},
      toggle: {},
      divider: {
        wrapper: {
          display: 'none',
        },
        icon: {
          display: 'none',
        },
        itemMain: {
          display: 'none',
        },
      },
    },
    density: {
      compact: {
        itemLabel: {
          textStyle: 'body.md',
          color: 'text',
        },
        itemDescription: {
          textStyle: 'body.xs',
          lineHeight: 'tight',
        },
        icon: {
          w: '24',
          h: '24',
        },
      },
      comfortable: {
        itemLabel: {
          textStyle: 'body.md',
          color: 'text',
        },
        itemDescription: {
          textStyle: 'body.xs',
          lineHeight: 'tight',
        },
        icon: {
          w: '24',
          h: '24',
        },
      },
      spacious: {
        itemLabel: {
          textStyle: 'body.lg',
          color: 'text',
        },
        itemDescription: {
          textStyle: 'body.sm',
          lineHeight: 'tight',
        },
        icon: {
          w: '28',
          h: '28',
        },
      },
    },
    iconBefore: {
      true: {},
      false: {},
    },
    iconAfter: {
      true: {},
      false: {},
    },
    selected: {
      true: {},
      false: {},
    },
  },
  defaultVariants: {
    density: 'compact',
    selected: false,
  },
});
