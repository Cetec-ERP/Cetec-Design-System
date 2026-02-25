import { defineSlotRecipe } from '@pandacss/dev';

const menuBase = {
  wrapper: {
    width: '260',
    bg: 'surface',
    borderRadius: '4',
    boxShadow: 'medium',
    borderWidth: '1',
    borderColor: 'border.default',
    overflow: 'hidden',
    zIndex: '100',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8',
    width: 'full',
    textAlign: 'left',
    borderWidth: '0',
    bg: 'transparent',
    color: { base: 'slate.90', _dark: 'slate.5' },
    cursor: 'pointer',
    outline: '2px solid transparent',
    outlineOffset: '-2',
    _hover: {
      bg: 'surface.hovered',
    },
    _active: {
      bg: 'surface.pressed',
    },
    _focusVisible: {
      outlineColor: 'border.focused',
    },
    _disabled: {
      opacity: '0.4',
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
    '&[data-selected=true]': {
      bg: 'surface.hovered',
    },
    '&[data-active=true]': {
      bg: 'surface.hovered',
    },
  },
  itemIconBefore: {
    width: '24',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
  },
  itemIconAfter: {
    width: '24',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ml: 'auto',
    flexShrink: '0',
  },
  itemMain: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2',
    minWidth: '0',
  },
  itemLabel: {
    color: { base: 'slate.90', _dark: 'slate.5' },
  },
  itemDescription: {
    color: { base: 'slate.60', _dark: 'slate.30' },
  },
  groupLabel: {
    px: '12',
    py: '6',
    color: { base: 'slate.60', _dark: 'slate.30' },
  },
  divider: {
    borderWidth: '0',
    borderTopWidth: '1',
    borderColor: 'border.default',
    my: '4',
    mx: '12',
  },
  backHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: '12',
    py: '8',
    borderBottomWidth: '1',
    borderColor: 'border.default',
    bg: 'surface.pressed',
    width: 'full',
    textAlign: 'left',
  },
  submenuCaret: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ml: 'auto',
  },
  panelsViewport: {
    overflow: 'hidden',
    width: 'full',
  },
  panelsTrack: {
    display: 'flex',
    width: 'full',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    transitionTimingFunction: 'default',
    willChange: 'transform',
  },
  panel: {
    minWidth: '0',
    flexShrink: '0',
  },
  highlight: {
    bg: 'gold.5',
    color: 'text',
    px: '2',
    borderRadius: '2',
  },
  noResults: {
    px: '12',
    py: '10',
    color: { base: 'slate.60', _dark: 'slate.30' },
  },
};

const menuVariants = {
  density: {
    condensed: {
      item: {
        px: '10',
        py: '6',
      },
      itemLabel: {
        textStyle: 'body.xs',
      },
      itemDescription: {
        textStyle: 'body.xs',
      },
    },
    comfortable: {
      item: {
        px: '12',
        py: '8',
      },
      itemLabel: {
        textStyle: 'body.sm',
      },
      itemDescription: {
        textStyle: 'body.xs',
      },
    },
    spacious: {
      item: {
        px: '14',
        py: '12',
      },
      itemLabel: {
        textStyle: 'body.md',
      },
      itemDescription: {
        textStyle: 'body.sm',
      },
    },
  },
  itemVariant: {
    default: {},
    checkbox: {},
    toggle: {},
    section: {
      item: {
        cursor: 'default',
        _hover: {
          bg: 'transparent',
        },
      },
    },
    divider: {
      item: {
        display: 'none',
      },
    },
  },
};

export const menuRecipe = defineSlotRecipe({
  className: 'menu',
  jsx: ['Menu', 'MenuItem', 'MenuGroup', 'SubMenu'],
  slots: [
    'wrapper',
    'list',
    'item',
    'itemIconBefore',
    'itemIconAfter',
    'itemMain',
    'itemLabel',
    'itemDescription',
    'groupLabel',
    'divider',
    'backHeader',
    'submenuCaret',
    'panelsViewport',
    'panelsTrack',
    'panel',
    'highlight',
    'noResults',
  ],
  base: menuBase,
  variants: menuVariants,
  defaultVariants: {
    density: 'comfortable',
    itemVariant: 'default',
  },
});
