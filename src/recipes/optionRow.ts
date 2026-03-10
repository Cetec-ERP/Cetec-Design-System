import { defineRecipe } from '@pandacss/dev';

export const optionRowRecipe = defineRecipe({
  className: 'optionRow',
  jsx: ['OptionRow'],
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'full',
    py: '8',
    px: '8',
    fontSize: '14',
    cursor: 'pointer',
    outline: 'none',
    bg: 'transparent',
    border: 'none',
    color: 'text',
    scrollSnapAlign: 'start',
    transitionDuration: 'fast',
    transitionProperty: 'background, color',
    transitionTimingFunction: 'default',
    _hover: {
      bg: 'bg.neutral',
    },
    _focusVisible: {
      outlineWidth: '2',
      outlineStyle: 'solid',
      outlineColor: 'border.focused',
      outlineOffset: '-2',
    },
  },
  variants: {
    selected: {
      true: {
        bg: 'bg.selected',
        color: 'text.selected',
        fontWeight: 'medium',
        _hover: {
          bg: 'bg.selected.hovered',
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    selected: false,
  },
});
