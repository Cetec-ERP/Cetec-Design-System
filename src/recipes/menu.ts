import { defineSlotRecipe } from '@pandacss/dev';

const menuBase = {
  wrapper: {
    position: { base: 'fixed', md: 'relative' },
    left: '0',
    bottom: '0',
    width: { base: 'full', md: '260' },
    bg: { base: 'slate.0', _dark: 'slate.80' },
    py: { base: '12', md: '4' },
    boxShadow: 'medium',
    borderTopLeftRadius: { base: '8', md: '4' },
    borderTopRightRadius: { base: '8', md: '4' },
    borderBottomLeftRadius: { base: '0', md: '4' },
    borderBottomRightRadius: { base: '0', md: '4' },
    "& ~ [name='caret-left']": {
      fill: { base: 'slate.90', _dark: 'slate.0' },
    },
    "& ~ [name='caret-right']": {
      fill: { base: 'slate.90', _dark: 'slate.0' },
      mr: 'auto',
    },
    '& ~ svg': {
      fill: { base: 'slate.90', _dark: 'slate.0' },
      mr: 'auto',
    },
    overflow: 'hidden',
    zIndex: 1,
  },
  wrapperInner:{
    display: 'flex',
  flexDirection: 'column',
    '&[data-anim=slide-left]': {
      animation: 'slideLeft',
    },
    '&[data-anim=slide-right]': {
      animation: 'slideRight',
    },
  },
  menuItem: {
    display: 'flex',
    gap: '4',
    py: { base: '12', md: '4' },
    px: { base: '20', md: '12' },
    outlineWidth: '2',
    outlineStyle: 'solid',
    outlineColor: 'transparent',
    outlineOffset: '0',
    '& a': {
      display: 'flex',
      justifyContent: 'space-between',
      w: 'full',
    },
    _hover: {
      bg: { base: 'slate.2', _dark: 'slate.50' },
      cursor: 'pointer',
    },
    _active: {
      bg: { base: 'slate.10', _dark: 'slate.100' },
    },
    _focusVisible: {
      outlineColor: { base: 'slate.90', _dark: 'slate.0' },
      borderColor: { base: 'slate.90', _dark: 'slate.0' },
      outlineOffset: '-2',
    },
    _disabled: {
      opacity: 0.4,
      _hover: {
        bg: 'transparent',
      },
      _active: {
        bg: 'transparent',
      },
      _focusVisible: {
        outlineColor: 'transparent',
        borderColor: 'transparent',
      },
    },
    "&[data-selected='true']": {
      bg: { base: 'slate.10 ', _dark: 'slate.100' },
      _hover: { base: 'slate.2', _dark: 'slate.50' },
      _active: { base: 'slate.10', _dark: 'slate.100' },
    },
  },
  sectionTitle: {
    px: { base: '20', md: '12' },
    pt: { base: '20', md: '12' },
    pb: { base: '12', md: '4' },
  },
  menuLabel: {
    fontWeight: 'normal',
  },
  parentLabel: {
    display: 'flex',
    py: '4',
    pr: '12',
    pl: '4',
    bg: { base: 'slate.5', _dark: 'slate.60' },
    cursor: 'pointer',
  },
  multiLevelIcon: {
    ml: 'auto',
  },
  dividerSection: {
    py: { base: '8', md: '12' },
    px: { base: '20', md: '12' },
  },
  spacerSection: {
    h: { base: '24', md: '16' },
  },
};

const menuVariants = {
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
};

export const menuRecipe = defineSlotRecipe({
  className: 'menu',
  jsx: ['Menu'],
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
  ],
  base: menuBase,
  variants: menuVariants,
  defaultVariants: {
    iconPlacement: 'left',
  },
});
