import { defineSlotRecipe } from '@pandacss/dev';

const menuBase = {
  wrapper: {
    width: 'fit',
    bg: 'surface',
    borderRadius: '4',
    boxShadow: 'overlay',
    overflow: 'hidden',
    zIndex: '100',
    transitionProperty: 'width, height',
    transitionDuration: 'normal',
    transitionTimingFunction: 'default',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '4',
    width: 'full',
    textAlign: 'left',
    borderWidth: '1',
    borderStyle: 'solid',
    borderColor: 'transparent',
    color: 'text',
    cursor: 'pointer',
    outline: '2px solid transparent',
    outlineOffset: '-2',
    bg: 'surface',
    _hover: {
      bg: 'bg.neutral.hovered',
    },
    '&:is(:active)': {
      bg: 'bg.neutral.pressed',
    },
    _focus: {
      bg: 'bg.neutral.hovered',
    },
    _selected: {
      bg: 'surface.selected',
      _hover: {
        bg: 'surface.selected.hovered',
      },
      '&:is(:active)': {
        bg: 'surface.selected.pressed',
      },
      _focus: {
        bg: 'surface.selected.hovered',
      },
    },
    _disabled: {
      opacity: '0.4',
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
    //   '&[data-active=true]': {
    //     bg: 'surface.hovered',
    //   },
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
  groupLabel: {
    px: '10',
    pt: '12',
    pb: '4',
    color: 'text.subtlest',
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
    justifyContent: 'start',
    gap: '4',
    ps: '4',
    borderWidth: '0',
    borderBlockWidth: '3',
    borderColor: 'transparent',
    bg: { base: 'tan.5', _dark: 'tan.60' },
    width: 'full',
    textAlign: 'left',
    cursor: 'pointer',
    color: 'text',
    _hover: {
      bg: { base: 'tan.10', _dark: 'tan.50' },
    },
    _active: {
      bg: { base: 'tan.20', _dark: 'tan.70' },
    },
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
    position: 'relative',
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
  sizeProbe: {
    position: 'absolute',
    pointerEvents: 'none',
    visibility: 'hidden',
    inset: '0',
    width: 'fit-content',
    height: 'fit-content',
    overflow: 'visible',
  },
  highlight: {
    bg: 'gold.5',
    color: 'text',
    borderRadius: '2',
  },
  noResults: {
    px: '12',
    py: '10',
    color: 'text.subtlest',
  },
};

const menuVariants = {
  density: {
    compact: {
      item: {
        py: '3',
        px: '10',
      },
      itemLabel: {
        textStyle: 'body.md',
        color: 'text',
      },
      itemDescription: {
        textStyle: 'body.xs',
        lineHeight: 'tight',
      },
      backHeader: {
        py: '3',
        pe: '10',
      },
    },
    comfortable: {
      item: {
        py: '7',
        px: '12',
      },
      itemLabel: {
        textStyle: 'body.md',
        color: 'text',
      },
      itemDescription: {
        textStyle: 'body.xs',
        lineHeight: 'tight',
      },
      backHeader: {
        py: '7',
        pe: '12',
      },
    },
    spacious: {
      item: {
        py: '9',
        px: '16',
      },
      itemLabel: {
        textStyle: 'body.lg',
        color: 'text',
      },
      itemDescription: {
        textStyle: 'body.sm',
        lineHeight: 'tight',
      },
      backHeader: {
        py: '9',
        pe: '16',
      },
    },
  },
  itemVariant: {
    default: {},
    checkbox: {
      item: {
        _hover: {
          bg: 'surface',
        },
        _focus: {
          bg: 'bg.neutral.hovered',
        },
        '&:is(:active), &:is([data-active="true"]):hover': {
          bg: 'surface',
        },
        _selected: {
          bg: 'surface',
          _hover: {
            bg: 'surface',
          },
          _focus: {
            bg: 'bg.neutral.hovered',
          },
        },
      },
    },
    toggle: {
      item: {
        _hover: {
          bg: 'surface',
        },
        _focus: {
          bg: 'bg.neutral.hovered',
        },
        '&:is(:active), &:is([data-active="true"]):hover': {
          bg: 'surface',
        },
        _selected: {
          bg: 'surface',
          _hover: {
            bg: 'surface',
          },
          _focus: {
            bg: 'bg.neutral.hovered',
          },
        },
      },
    },
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
  iconBefore: {
    true: {
      item: {},
    },
  },
  iconAfter: {
    true: {
      item: {},
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
    'icon',
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
    'sizeProbe',
    'highlight',
    'noResults',
  ],
  base: menuBase,
  variants: menuVariants,
  defaultVariants: {
    density: 'compact',
    itemVariant: 'default',
  },
});
