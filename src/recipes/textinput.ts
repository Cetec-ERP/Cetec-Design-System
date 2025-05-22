import { defineRecipe } from '@pandacss/dev';

const textinputVariants = {
  size: {
    medium: {
      py: 3,
      px: 10,
      fontSize: '16',
    },
    small: {
        py: 0,
        px: 8,
        fontSize: '14'
    },
    large: {
        py: 7,
        px: 12,
        fontSize: '16'
    },
  },
};

const textinputBase = {
    position: 'relative',
    borderWidth: '1',
    borderColor: 'slate.30',
    borderStyle: 'solid',
    borderRadius: '4',
    fontFamily: 'sans',
    color: {
        base: 'slate.90', _dark: 'slate.0'
    },
    _placeholder:{
        color:{
            base: 'slate.50', _dark: 'slate.40'
        }
    },
    _disabled:{
        opacity: 0.4,
    },
    _focusVisible:{
    outlineWidth:'1px',
    outlineColor: 'slate.90',
       boxShadow: {base: '0px 0px 0px 1px {colors.slate.0}, 0px 0px 0px 3px {colors.slate.90}',
        _dark: '0px 0px 0px 2px {colors.slate.90}, 0px 0px 0px 4px {colors.slate.0}'
       }
    },
    _error: {
        display: "inline-grid",
        borderColor: 'red.50'
      },
}

export const textinputRecipe = defineRecipe({
  className: 'textinput',
  jsx: ['TextInput'],
  base: textinputBase,
  variants: textinputVariants,
  defaultVariants: {
    size: 'medium',
  }
});
