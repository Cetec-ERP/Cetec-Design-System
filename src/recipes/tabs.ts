import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

export const tabsRecipe = defineSlotRecipe({
  className: 'tabs',
  jsx: ['Tabs'],
  slots: ['root', 'list', 'tab', 'badge', 'overflow', 'menu', 'panel'],
  base: {
    root: {
      ...globalBaseStyles,
      display: 'flex',
      flexDirection: 'column',
      minWidth: '0',
      width: 'full',
    },
    list: {
      ...globalBaseStyles,
      position: 'relative',
      display: 'flex',
      alignItems: 'stretch',
      flexWrap: 'nowrap',
      minWidth: '0',
      width: 'full',
      // The 1px rule the strip sits on. Each tab's 2px underline overlaps it.
      borderBottomWidth: '1',
      borderBottomStyle: 'solid',
      borderBottomColor: 'border',
    },
    tab: {
      ...globalBaseStyles,
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6',
      flexShrink: '0',
      whiteSpace: 'nowrap',
      appearance: 'none',
      bg: 'transparent',
      cursor: 'pointer',
      px: '12',
      py: '8',
      fontSize: '14',
      lineHeight: 'default',
      color: 'text.subtlest',
      borderWidth: '0',
      borderBottomWidth: '2',
      borderBottomStyle: 'solid',
      borderBottomColor: 'transparent',
      // Pull the 2px underline on top of the list's 1px rule.
      marginBottom: '-1',
      transitionProperty: 'color, border-color',
      transitionDuration: 'fast',
      transitionTimingFunction: 'default',
      _hover: {
        color: 'text',
        borderBottomColor: 'border',
      },
      _selected: {
        color: 'text',
        borderBottomColor: 'border.bold',
      },
      _focusVisible: {
        outlineWidth: '2',
        outlineStyle: 'solid',
        outlineColor: 'border.focused',
        outlineOffset: '-2',
      },
      _disabled: {
        color: 'text.disabled',
        cursor: 'not-allowed',
        _hover: {
          color: 'text.disabled',
          borderBottomColor: 'transparent',
        },
      },
      _motionReduce: {
        transitionDuration: 'fastest',
      },
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: '0',
    },
    overflow: {
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: '0',
      marginInlineStart: 'auto',
      alignSelf: 'center',
    },
    menu: {
      minWidth: '160',
    },
    panel: {
      ...globalBaseStyles,
      color: 'text',
      fontSize: '14',
      minWidth: '0',
      _focusVisible: {
        outlineWidth: '2',
        outlineStyle: 'solid',
        outlineColor: 'border.focused',
        outlineOffset: '2',
      },
    },
  },
  variants: {
    /** Keeps an overflowed tab measurable while removing it from the strip. */
    overflowed: {
      true: {
        tab: {
          position: 'absolute',
          visibility: 'hidden',
          pointerEvents: 'none',
          insetInlineStart: '0',
          top: '0',
        },
      },
    },
  },
});
