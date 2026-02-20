import { defineRecipe } from '@pandacss/dev';
import { globalBaseStyles } from '~/styles/utilities';

const radioInputBase = {
  ...globalBaseStyles,
  display: 'flex',
  gap: '4',
};

export const radioInputRecipe = defineRecipe({
  className: 'radio-input',
  jsx: ['RadioInput'],
  base: radioInputBase,
  variants: {},
});
