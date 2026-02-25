import { defineSlotRecipe } from '@pandacss/dev';

const menuLegacyBase = {
  wrapper: {
    position: { base: 'fixed', md: 'relative' },
    left: '0',
    bottom: '0',
    width: { base: 'full', md: '260' },
    bg: 'surface',
    py: { base: '12', md: '4' },
    boxShadow: 'medium',
    borderRadius: {
      base: '8',
      md: '4',
    },
    borderBottomLeftRadius: { base: '0', md: '4' },
    borderBottomRightRadius: { base: '0', md: '4' },
    '& ~ svg': {
      fill: 'icon.inverse',
      mr: 'auto',
    },
    overflow: 'hidden',
    zIndex: 1,
  },

  wrapperInner: {
    display: 'flex',
    flexDirection: 'column',
    '&[data-anim=slide-left]': { animation: 'slideLeft' },
    '&[data-anim=slide-right]': { animation: 'slideRight' },
  },

  menuItem: {
    display: 'flex',
    gap: '4',
    px: { base: '20', md: '12' },
    outline: '2px solid transparent',
    outlineOffset: '0',

    '& a': {
      display: 'flex',
      justifyContent: 'space-between',
      w: 'full',
    },

    _hover: {
      bg: 'surface.hovered',
      cursor: 'pointer',
    },
    _active: {
      bg: 'surface.pressed',
    },
    _focusVisible: {
      outlineColor: 'border.focused',
      outlineOffset: '-2',
    },
    _disabled: {
      opacity: 0.4,
      _hover: {
        bg: 'transparent',
        pointerEvents: 'none',
        cursor: 'not-allowed',
      },
      _active: { bg: 'transparent' },
      _focusVisible: { outlineColor: 'transparent' },
    },

    "&[data-selected='true']": {
      bg: 'surface.hovered',
    },
  },

  sectionTitle: {
    px: { base: '20', md: '12' },
    pt: { base: '20', md: '12' },
    pb: { base: '12', md: '4' },
  },

  menuLabel: { fontWeight: 'normal' },

  parentLabel: {
    display: 'flex',
    py: '4',
    pr: '12',
    pl: '4',
    bg: 'surface.pressed',
    cursor: 'pointer',
  },

  multiLevelIcon: { ml: 'auto' },

  dividerSection: {
    py: { base: '8', md: '12' },
    px: { base: '20', md: '12' },
  },

  spacerSection: { h: { base: '24', md: '16' } },

  iconSection: { w: '24' },

  toggleMenu: { py: '6' },

  loaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4',
  },
};

const menuLegacyVariants = {
  iconPlacement: {
    left: {
      menuItem: { flexDirection: 'row' },
    },
    right: {
      menuItem: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
      },
    },
  },
  multiSelectType: {
    toggle: {
      menuItem: { py: { base: '16', md: '6' }, gap: '12' },
    },
    checkbox: {
      menuItem: { py: { base: '12', md: '4' } },
    },
  },
};

export const menuLegacyRecipe = defineSlotRecipe({
  className: 'menu-legacy',
  jsx: ['MenuLegacy'],
  slots: [
    'wrapper',
    'sectionTitle',
    'menuItem',
    'menuLabel',
    'menuDescription',
    'parentLabel',
    'multiLevelIcon',
    'dividerSection',
    'spacerSection',
    'wrapperInner',
    'iconSection',
    'toggleMenu',
    'loaderContainer',
  ],
  base: menuLegacyBase,
  variants: menuLegacyVariants,
  defaultVariants: {
    iconPlacement: 'left',
    multiSelectType: 'checkbox',
  },
});
