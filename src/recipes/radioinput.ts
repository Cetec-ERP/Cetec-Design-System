import { defineRecipe } from '@pandacss/dev';

const radioInputBase = {
  display: 'flex',
  '&.cetec-label': {
    fontSize: '16',
  },
};

export const radioInputRecipe = defineRecipe({
  className: 'radio-input',
  jsx: ['RadioInput'],
  base: radioInputBase,
  variants: {},
});
