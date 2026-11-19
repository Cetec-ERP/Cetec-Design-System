import { defineSlotRecipe } from '@pandacss/dev';

/**
 * The checkbox. In the app it wraps a native input and its icons.
 *
 * In a printed document, under a `cetec-printDoc` root, the Go print helper
 * writes static markup with no input: the `container`, one inlined icon SVG
 * in the `indicator` slot (`checkbox` for an empty box, `checkbox-checked`
 * for a ticked one), and the text in the `label` slot. The icon prints in
 * paper ink, so thermal ink prints it solid black.
 */
export const checkboxRecipe = defineSlotRecipe({
  className: 'checkbox',
  jsx: ['Checkbox'],
  slots: ['container', 'input', 'indicator', 'checkBg', 'label'],
  base: {
    container: {
      position: 'relative',
      display: 'inline-grid',
      placeContent: 'center',
      gridTemplateColumns: 'auto 1fr',
      alignItems: 'start',
      cursor: 'pointer',
      userSelect: 'none',
      _printDoc: {
        alignItems: 'center',
        columnGap: 'print.4',
        cursor: 'auto',
        userSelect: 'auto',
      },
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
        zIndex: '3',
      },
      "& ~ [name='checkbox-checked']": {
        display: 'none',
      },
      "& ~ [name='checkbox-indeterminate']": {
        display: 'none',
      },
      _checked: {
        "& ~ [name='checkbox-checked']": {
          display: 'inline-grid',
          fill: 'icon',
          zIndex: '2',
        },
        "& ~ [name='checkbox']": {
          display: 'none',
        },
        "& ~ [name='checkbox-indeterminate']": {
          display: 'none',
        },
      },
      '&[data-indeterminate]': {
        "& ~ [name='checkbox-indeterminate']": {
          display: 'inline-grid',
          fill: 'icon',
          zIndex: '3',
        },
        "& ~ [name='checkbox']": {
          display: 'none',
        },
        "& ~ [name='checkbox-checked']": {
          display: 'none',
        },
      },
      _error: {
        display: 'inline-grid',
        '& ~ svg:not([name="square"])': {
          fill: 'red.50',
          zIndex: '3',
        },
      },
      _focusVisible: {
        "& ~ [name='checkbox-focus']": {
          display: 'inline-grid',
          position: 'absolute',
          fill: 'border.focused',
          zIndex: '2',
        },
      },
    },
    indicator: {
      display: 'none',
      width: '24',
      height: '24',
      zIndex: '3',
      // The icons sit above the input, so clicks must pass through to it.
      pointerEvents: 'none',
      "&:is([name='checkbox'])": {
        fill: 'icon.subtlest',
        zIndex: '3',
      },
      _printDoc: {
        display: 'block',
        width: 'paper.tickBox',
        height: 'paper.tickBox',
        fill: 'paper.ink',
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
      pointerEvents: 'none',
    },
    label: {
      color: 'text',
      _printDoc: {
        textStyle: 'print.fieldValue',
      },
    },
  },
});
