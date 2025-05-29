import { defineSlotRecipe } from '@pandacss/dev';

const switchBase = {
  container: {
    position: 'relative',
    w: '40',
    h: '24',
    borderWidth: '2',
    borderStyle: 'solid',
    borderColor: { base: 'slate.20', _dark: 'slate.40' },
    rounded: '24',
    cursor: 'pointer',
    transitionProperty: 'border-color, background-color',
    transitionDuration: '200ms',
    transitionTimingFunction: 'ease-in-out',

    '&::before': {
      content: "''",
      position: 'absolute',
      w: '36',
      h: '20',
      rounded: '24',
      bg: { base: 'slate.0', _dark: 'slate.90' },
      transitionProperty: 'border-color, background-color',
      transitionDuration: '200ms',
      transitionTimingFunction: 'ease-in-out',
    },

    _checked: {
      borderColor: { base: 'slate.90', _dark: 'slate.0' },
      '&::before': {
        bg: { base: 'slate.90', _dark: 'slate.0' },
      },
    },

    _disabled: {
      opacity: 0.4,
      pointerEvents: 'none',
      cursor: 'none',
      display: 'inline-grid',
    },

    _error: {
      borderColor: 'error.default',
      _checked: {
        borderColor: { base: 'slate.90', _dark: 'slate.0' },
      },
    },
  },

  input: {
    position: 'absolute',
    opacity: 0,
    w: '40',
    h: '24',
    rounded: '24',
    m: 0,
    p: 0,
    border: 'none',
    zIndex: 0,
    cursor: 'inherit',
    top: '-2',
    left: '-2',

    "& ~ [name='circle']": {
      display: 'inline-grid',
      position: 'absolute',
      top: '-2',
      left: '-2',
      opacity: 1,
      transform: 'translateX(0)',
      transitionProperty: 'transform, opacity',
transitionDuration: '200ms',
transitionTimingFunction: 'ease-in-out',
    },

    "& ~ [name='circle-check']": {
      display: 'inline-grid',
      position: 'absolute',
      top: '-2',
      left: '-2',
      filter: { base: 'invert(100%)', _dark: 'invert(0%)' },
      opacity: 0,
      transform: 'translateX(0)',
      transitionProperty: 'transform, opacity',
transitionDuration: '200ms',
transitionTimingFunction: 'ease-in-out',
    },

    _checked: {
      "& ~ [name='circle']": {
        opacity: 0,
        transform: 'translateX(10px)',
      },
      "& ~ [name='circle-check']": {
        opacity: 1,
        transform: 'translateX(16px)',
      },
    },

    _focusVisible: {
      appearance: 'none',
      opacity: 1,
      outlineColor: { base: 'slate.80', _dark: 'slate.5' },
      outlineOffset: 1,
      outlineWidth: 2,
      outlineStyle: 'solid',
      rounded: '24',
      w: '40',
      h: '24',
      top: '-2',
      left: '-2',
    },
  },

  indicator: {
    display: 'none',
    w: '24',
    h: '24',
    transitionProperty: 'border-color, background-color',
    transitionDuration: '200ms',
    transitionTimingFunction: 'ease-in-out',

    "&:is([name='circle'])": {
      fill: { base: 'slate.20', _dark: 'slate.40' },
    },
  },
};

export const switchRecipe = defineSlotRecipe({
  className: 'switchbox',
  jsx: ['switchbox'],
  slots: ['container', 'input', 'indicator'],
  base: switchBase,
});
