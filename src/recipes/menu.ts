import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

const menuBase = {
  wrapper: {
    ...globalBaseStyles,
    width: 'fit',
    bg: 'surface',
    borderRadius: '4',
    boxShadow: 'overlay',
    overflow: 'hidden',
    zIndex: '100',
    transitionProperty: 'width, height',
    transitionDuration: 'normal',
    transitionTimingFunction: 'default',
    outline: 'none',
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
    bg: 'transparent',
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
    color: 'text.subtlest',
    borderStyle: 'solid',
    borderWidth: '1',
    borderColor: 'transparent',
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
    gap: '0',
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
  levelsViewport: {
    overflow: 'hidden',
    width: 'full',
    position: 'relative',
  },
  levelsTrack: {
    display: 'flex',
    width: 'full',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    transitionTimingFunction: 'default',
    willChange: 'transform',
  },
  level: {
    minWidth: '0',
    flexShrink: '0',
  },
  sizeProbe: {
    position: 'absolute',
    pointerEvents: 'none',
    visibility: 'hidden',
    top: '0',
    left: '0',
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
      groupLabel: {
        px: '10',
        pt: '8',
        pb: '2',
        fontSize: '12',
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
        py: '1',
        pe: '18',
        ps: '5',
        textStyle: 'body.md',
        color: 'text',
      },
      icon: {
        w: '24',
        h: '24',
      },
    },
    comfortable: {
      item: {
        py: '7',
        px: '12',
      },
      groupLabel: {
        px: '12',
        pt: '12',
        pb: '4',
        fontSize: '14',
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
        py: '5',
        pe: '20',
        ps: '7',
        textStyle: 'body.md',
        color: 'text',
      },
      icon: {
        w: '24',
        h: '24',
      },
    },
    spacious: {
      item: {
        py: '9',
        px: '16',
      },
      groupLabel: {
        px: '16',
        pt: '16',
        pb: '6',
        fontSize: '16',
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
        py: '7',
        pe: '24',
        ps: '9',
        textStyle: 'body.lg',
        color: 'text',
      },
      icon: {
        w: '28',
        h: '28',
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
  panel: {
    true: {
      wrapper: {
        width: 'full',
        height: 'full',
        minHeight: 'full',
        overflowY: 'auto',
        rounded: '0',
        boxShadow: 'none',
      },
    },
  },
};

const menuCompoundVariants: NonNullable<
  Parameters<typeof defineSlotRecipe>[0]['compoundVariants']
> = [
  {
    density: 'compact',
    iconBefore: true,
    css: {
      item: { ps: '5' },
    },
  },
  {
    density: 'compact',
    iconAfter: true,
    css: {
      item: { pe: '5' },
    },
  },
  {
    density: 'compact',
    itemVariant: 'checkbox',
    css: {
      item: { ps: '5' },
    },
  },
  {
    density: 'comfortable',
    iconBefore: true,
    css: {
      item: { ps: '7' },
    },
  },
  {
    density: 'comfortable',
    iconAfter: true,
    css: {
      item: { pe: '7' },
    },
  },
  {
    density: 'comfortable',
    itemVariant: 'checkbox',
    css: {
      item: { ps: '7' },
    },
  },
  {
    density: 'spacious',
    iconBefore: true,
    css: {
      item: { ps: '9' },
    },
  },
  {
    density: 'spacious',
    iconAfter: true,
    css: {
      item: { pe: '9' },
    },
  },
  {
    density: 'spacious',
    itemVariant: 'checkbox',
    css: {
      item: { ps: '9' },
    },
  },
];

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
    'levelsViewport',
    'levelsTrack',
    'level',
    'sizeProbe',
    'highlight',
    'noResults',
  ],
  base: menuBase,
  variants: menuVariants,
  compoundVariants: menuCompoundVariants,
  defaultVariants: {
    density: 'compact',
    itemVariant: 'default',
  },
});
