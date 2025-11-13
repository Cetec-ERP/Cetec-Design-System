import { defineSlotRecipe } from '@pandacss/dev';

export const radioRecipe = defineSlotRecipe({
  className: 'radio',
  jsx: ['Radio'],
  slots: ['container', 'input', 'indicator'],
  base: {
    container: {
      position: 'relative',
      display: 'inline-grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 4,
      alignItems: 'start',
      cursor: 'pointer',
      userSelect: 'none',
      color: { base: 'slate.90', _dark: 'slate.0' },
      _error: {
        color: 'error.default',
      },
    },
    input: {
      position: 'absolute',
      opacity: 0,
      width: 'full',
      height: 'full',
      margin: '0',
      padding: '0',
      zIndex: 1,
      cursor: 'inherit',
      "& ~ [name='radio']": {
        display: 'inline-grid',
      },
      _checked: {
        "& ~ [name='radio-checked']": {
          display: 'inline-grid',
          fill: { base: 'slate.90', _dark: 'slate.0' },
        },
        "& ~ [name='radio']": {
          display: 'none',
        },
      },
      _disabled: {
        '& ~ svg': {
          opacity: 0.4,
          pointerEvents: 'none',
          cursor: 'none',
        },
        display: 'inline-grid',
      },
      _error: {
        display: 'inline-grid',
        '& ~ svg': {
          fill: 'error.default',
        },
      },
      _focusVisible: {
        "& ~ [name='radio-focus']": {
          display: 'inline-grid',
          position: 'absolute',
          fill: { base: 'slate.90', _dark: 'slate.1' },
        },
      },
    },
    indicator: {
      placeContent: 'center',
      display: 'none',
      width: 24,
      height: 24,
      "&:is([name='radio'])": {
        display: 'inline-grid',
        fill: 'slate.20',
      },
    },
  },
});
