import { defineSlotRecipe } from '@pandacss/dev';

const switchBase = {
  container: {
    position: 'relative',
    borderWidth: '2',
    borderStyle: 'solid',
    borderColor: { base: 'slate.20', _dark: 'slate.40' },
    width: '40',
    height: '24',
    borderRadius: '24',
    transitionProperty: 'border-color, background-color',
    transitionDuration: '200ms',
    transitionTimingFunction: 'ease-in-out',
    cursor: 'pointer',
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '36',
      height: '20',
      borderRadius: '24',
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
    width: '40',
    height: '24',
    borderRadius: '24',
    margin: '0',
    padding: '0',
    border: 'none',
    zIndex: 0,
    cursor: 'inherit',
    top: '-2',
    left: '-2',
    "& ~ [name='circle']": {
      display: 'inline-grid',
      top: '-2',
      left: '-2',
      position: 'absolute',
      opacity: 1,
      
    },
    "& ~ [name='circle-check']": {
      display: 'inline-grid',
      filter: { base: 'invert(100%)', _dark: 'invert(0%)' },
      top: '-2',
      right: '-2',
      position: 'absolute',
      opacity: 0,
      
    },
    _checked: {
      "& ~ [name='circle-check']": {
        opacity: 1,
        transitionProperty: 'border-color, background-color',
      transitionDuration: '200ms',
      transitionTimingFunction: 'ease-in-out',
      },
      "& ~ [name='circle']": {
        opacity: 0,
        transitionProperty: 'border-color, background-color',
      transitionDuration: '200ms',
      transitionTimingFunction: 'ease-in-out',
      },
    },
    _focusVisible: {
      opacity: 1,
      appearance: 'none',
      outlineColor: { base: 'slate.80', _dark: 'slate.5' },
      outlineOffset: 1,
      borderRadius: '24',
      width: '40',
      height: '24',
      outlineWidth: 2,
      left: '-2',
      top: '-2',
      outlineStyle: 'solid',
    },
  },

  indicator: {
    display: 'none',
    width: 24,
    height: 24,
    transitionProperty: 'border-color, background-color',
    transitionDuration: '200ms',
    transitionTimingFunction: 'ease-in-out',
    "&:is([name='circle'])": {
      display: 'inline-grid',
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
