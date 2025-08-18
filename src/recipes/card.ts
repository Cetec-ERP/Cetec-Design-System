import { defineRecipe } from '@pandacss/dev';

const cardBase = {
  bg: {base: 'slate.0', _dark: 'slate.80'},
  borderRadius: '4',
  outlineWidth: '1',
  outlineStyle: 'solid',
  outlineColor: 'transparent',
  outlineOffset: '0',
};

const cardVariant = {
  variant: {
    default: {
      boxShadow: 'low',
      _hover: {
        boxShadow: 'medium',
      },
      _active: {
        boxShadow: 'inset',
        _grabbed: {
          boxShadow: 'high',
          cursor: 'grabbing',
        }
      },
      _focusVisible: {
        boxShadow: 'none',
        borderWidth: '1',
        outlineColor: { base: 'slate.90', _dark: 'slate.0' },
        borderColor: { base: 'slate.90', _dark: 'slate.0' },
      },
      _disabled: {
        opacity: '0.4',
        _hover:{
          boxShadow: 'low',
        },
        _active:{
          boxShadow: 'low',
        }
      },
    },
    flat: {
      borderWidth: '1',
      borderStyle: 'solid',
      borderColor: { base: 'slate.10', _dark: 'slate.70' },
      _hover: {
        borderColor: { base: 'slate.30', _dark: 'slate.50' },
      },
      _active: {
        borderColor: { base: 'slate.50', _dark: 'slate.30' },
        _grabbed: {
          boxShadow: 'high',
          cursor: 'grabbing',
        }
      },
      _focusVisible: {
        boxShadow: 'none',
        outlineColor: { base: 'slate.90', _dark: 'slate.0' },
        borderColor: { base: 'slate.90', _dark: 'slate.0' },

      },
      _disabled: {
        opacity: '0.4',
        _hover:{
          borderColor: { base: 'slate.10', _dark: 'slate.70' },
        },
        _active:{
          borderColor: { base: 'slate.10', _dark: 'slate.70' },
        }
      },
    },
  },
};

export const cardRecipe = defineRecipe({
  className: 'card',
  jsx: ['Card'],
  base: cardBase,
  variants: cardVariant,
  defaultVariants: {
    variant: 'default',
  },
});
