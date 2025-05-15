import { defineSlotRecipe } from '@pandacss/dev';

export const checkBoxRecipe = defineSlotRecipe({
  className: 'checkbox',
  jsx: ['CheckBox'],
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
    },
    input: {
      position: 'absolute',
      opacity: '0',
      width: 'full',
      height: 'full',
      margin: '0',
      padding: '0',
      zIndex: 1,
      cursor: 'inherit',
      "& ~ [name='checkbox']": {
        display: 'inline-grid',
      },
      _checked: {
        "& ~ [name='checkbox-checked']": {
          display: 'inline-grid',
          fill: { base: 'slate.90', _dark: 'slate.0' },
        },
        "& ~ [name='checkbox']": {
          display: 'none',
        },
      },
      _indeterminate: {
        "& ~ [name='checkbox-indeterminate']": {
          display: 'inline-grid',
          fill: { base: 'slate.90', _dark: 'slate.0' },
          _disabled: {},
        },
        "& ~ [name='checkbox']": {
          display: 'none',
        },
      },
      _disabled: {
        '& ~ svg': {
          opacity: '0.4',
          pointerEvents: 'none',
          cursor: 'none',
        },
        display: 'inline-grid',
      },
      _error: {
        display: 'inline-grid',
        '& ~ svg': {
          fill: 'status.error.default',
        },
      },
      _focusVisible: {
        '& ~ svg': {
          outlineColor: { base: 'slate.80', _dark: 'slate.5' },
          outlineOffset: -3.5,
          borderRadius: '4',
          outlineWidth: 2,
          outlineStyle: 'solid',
        },
      },
    },
    indicator: {
      placeContent: 'center',
      display: 'none',
      width: 24,
      height: 24,
      "&:is([name='checkbox'])": {
        display: 'inline-grid',
        fill: { base: 'slate.30', _dark: 'slate.20' },
      },
    },
  },
});
