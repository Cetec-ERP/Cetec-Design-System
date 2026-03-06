import { defineRecipe } from '@pandacss/dev';

const radioInputBase = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '4',
  '&.cetec-label': {
    fontSize: '16',
    lineHeight: 'default',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  _groupDisabled: {
    opacity: 1, // let FormField handle disabled state opacity
  },
};

export const radioInputRecipe = defineRecipe({
  className: 'radioInput',
  jsx: ['RadioInput'],
  base: radioInputBase,
  variants: {},
});
