import { defineRecipe } from '@pandacss/dev';

const textInputVariants = {
  size: {
    medium: {
      py: 3,
      px: 10,
      fontSize: '16',
    },
    small: {
      py: 0,
      px: 8,
      fontSize: '14',
    },
    large: {
      py: 7,
      px: 12,
      fontSize: '16',
    },
  },
};

const textInputBase = {
  position: 'relative',
  borderWidth: '1',
  borderColor: 'slate.30',
  borderStyle: 'solid',
  borderRadius: '4',
  fontFamily: 'mono',
  outlineWidth: '2',
  outlineStyle: 'solid',
  outlineColor: 'transparent',
  outlineOffset: '1',
  color: {
    base: 'slate.90',
    _dark: 'slate.0',
  },
  _placeholder: {
    color: {
      base: 'slate.50',
      _dark: 'slate.40',
    },
  },
  _disabled: {
    opacity: 0.4,
  },
  _focusVisible: {
    outlineWidth: '2',
    outlineColor: { base: 'slate.90', _dark: 'slate.0' },
  },
  _focus: {
    borderColor: 'slate.90',
  },  
  _error: {
    display: 'inline-grid',
    borderColor: 'red.50',
  },
};

export const textinputRecipe = defineRecipe({
  className: 'textinput',
  jsx: ['TextInput'],
  base: textInputBase,
  variants: textInputVariants,
  defaultVariants: {
    size: 'medium',
  },
});
