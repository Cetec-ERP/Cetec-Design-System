import { defineRecipe } from '@pandacss/dev';

const spinnerBase = {
  aspectRatio: 'square',
  rounded: '100',
  borderWidth: '3',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderTopColor: 'slate.90',
  borderBottomColor: 'slate.90',
  animation: 'spin',
  filter: 'invert(1)',
  mixBlendMode: 'difference',
  isolation: 'isolate',
};

const spinnerVariants = {
  size: {
    medium: {
      height: '24',
      minHeight: '24',
    },
    small: {
      height: '16',
      minHeight: '16',
      borderWidth: '2',
    },
    large: {
      height: '32',
      minHeight: '32',
    },
  },
};

export const spinnerRecipe = defineRecipe({
  className: 'spinner',
  jsx: ['Spinner'],
  base: spinnerBase,
  variants: spinnerVariants,
  defaultVariants: {
    size: 'medium',
  },
});
