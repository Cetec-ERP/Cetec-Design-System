import { defineSlotRecipe } from '@pandacss/dev';

export const toggleRecipe = defineSlotRecipe({
  className: 'toggle',
  jsx: ['toggle'],
  slots: ['container', 'input', 'indicator'],
  base: {
    container: {
      position: 'relative',
      w: '40',
      h: '24',
      rounded: '24',
      bg: 'surface',
      cursor: 'pointer',
      transitionProperty: 'border-color, background-color',
      transitionDuration: '200ms',
      transitionTimingFunction: 'ease-in-out',
      borderWidth: '2',
      borderStyle: 'solid',
      borderColor: 'icon.decorative.subtle',
      '&:has(input:checked)': {
        bg: 'bg.neutral.inverse',
        borderColor: 'transparent',
      },
      '[data-error=true] &': {
        borderColor: 'border.danger',
      },
      _disabled: {
        opacity: 0.4,
        pointerEvents: 'none',
        cursor: 'none',
        display: 'inline-grid',
      },
      '&:has(:focus-visible)': {
        appearance: 'none',
        opacity: 1,
        outlineColor: 'border.focused',
        outlineOffset: 1,
        outlineWidth: 2,
        outlineStyle: 'solid',
        rounded: '24',
        w: '40',
        h: '24',
      },
    },

    input: {
      position: 'absolute',
      opacity: 0,
      w: '40',
      h: '24',
      m: '-2',
      p: 0,
      border: 'none',
      zIndex: 0,
      cursor: 'inherit',
    },

    indicator: {
      display: 'none',
      w: '24',
      h: '24',
      m: '-2px',
      transitionProperty: 'transform, opacity',
      transitionDuration: '200ms',
      transitionTimingFunction: 'ease-in-out',

      "&:is([name='circle'])": {
        display: 'inline-grid',
        position: 'absolute',
        opacity: 1,
        fill: 'icon.decorative.subtle',
        transform: 'translateX(0)',
        'input:checked ~ &': {
          opacity: 0,
          transform: 'translateX(10px)',
        },
      },

      "&:is([name='circle-check'])": {
        display: 'inline-grid',
        position: 'absolute',
        opacity: 0,
        transform: 'translateX(0)',
        fill: 'icon.inverse',
        'input:checked ~ &': {
          opacity: 1,
          transform: 'translateX(16px)',
          fill: 'icon.inverse',
        },
      },
    },
  },
});
