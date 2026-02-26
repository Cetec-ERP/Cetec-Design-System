import { defineRecipe } from '@pandacss/dev';

const radioInputBase = {
  display: 'flex',
  gap: '4',
};

export const radioInputRecipe = defineRecipe({
  className: 'radioInput',
  jsx: ['RadioInput'],
  base: radioInputBase,
  variants: {},
});
