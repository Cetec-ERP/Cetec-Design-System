import { defineSlotRecipe } from '@pandacss/dev';

export const checkboxRecipe = defineSlotRecipe({
  className: 'checkbox',
  jsx: ['Checkbox'],
  slots: ['container', 'input', 'indicator', 'checkBg'],
  base: {
    container: {
      position: 'relative',
      display: 'inline-grid',
      placeContent: 'center',
      gridTemplateColumns: 'auto 1fr',
      alignItems: 'start',
      cursor: 'pointer',
      userSelect: 'none',
    },
    input: {
      position: 'absolute',
      opacity: 0,
      width: 'full',
      height: 'full',
      margin: '0',
      padding: '0',
      zIndex: 'raised',
      cursor: 'inherit',
      "& ~ [name='checkbox']": {
        display: 'inline-grid',
        zIndex: 'zIndex.3',
      },
      _checked: {
        "& ~ [name='checkbox-checked']": {
          display: 'inline-grid',
          fill: 'icon',
          zIndex: 'zIndex.2',
        },
        "& ~ [name='checkbox']": {
          display: 'none',
        },
      },
      _indeterminate: {
        "& ~ [name='checkbox-indeterminate']": {
          display: 'inline-grid',
          fill: 'icon',
          zIndex: 'zIndex.3',
          _disabled: {},
        },
        "& ~ [name='checkbox']": {
          display: 'none',
        },
      },
      _error: {
        display: 'inline-grid',
        '& ~ svg:not([name="square"])': {
          fill: 'red.50',
          zIndex: 'zIndex.3',
        },
      },
      _focusVisible: {
        "& ~ [name='checkbox-focus']": {
          display: 'inline-grid',
          position: 'absolute',
          fill: 'border.focused',
          zIndex: 'zIndex.2',
        },
      },
    },
    indicator: {
      display: 'none',
      width: '24',
      height: '24',
      zIndex: 'zIndex.3',
      "&:is([name='checkbox'])": {
        fill: 'icon.subtlest',
        zIndex: 'zIndex.3',
      },
    },
    checkBg: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '24',
      height: '24',
      fill: 'surface',
      zIndex: 'base',
    },
  },
});
