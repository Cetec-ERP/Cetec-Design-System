import { defineRecipe } from '@pandacss/dev';

const textInputVariants = {
  size: {
    md: {
      py: 3,
      px: 10,
      fontSize: '16',
    },
    sm: {
      py: 0,
      px: 8,
      fontSize: '14',
    },
    lg: {
      py: 7,
      px: 12,
      fontSize: '16',
    },
    xl: {
      fontSize: '20',
      py: '9',
      px: '16',
    },
  },
  autoSize: {
    true: {
      fieldSizing: 'content',
    },
  },
};

const textInputBase = {
  position: 'relative',
  width: 'full',
  borderWidth: '1',
  borderColor: 'slate.30',
  borderStyle: 'solid',
  borderRadius: '4',
  lineHeight: 'default',
  fontFamily: 'body',
  outlineWidth: '1',
  outlineStyle: 'solid',
  outlineColor: 'transparent',
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

  _focus: {
    outlineColor: { base: 'slate.90', _dark: 'slate.0' },
    borderColor: { base: 'slate.90', _dark: 'slate.0' },
  },
  _error: {
    display: 'inline-grid',
    borderColor: 'error.default',
    _focus: {
      borderColor: { base: 'error.default', _dark: 'error.default' },
      outlineColor: { base: 'error.default', _dark: 'error.default' },
    },
  },
};

export const textinputRecipe = defineRecipe({
  className: 'textinput',
  jsx: ['TextInput'],
  base: textInputBase,
  variants: textInputVariants,
  defaultVariants: {
    size: 'md',
  },
});
