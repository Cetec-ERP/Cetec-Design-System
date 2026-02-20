import { defineRecipe } from '@pandacss/dev';
import { globalBaseStyles } from '~/styles/utilities';

const checkboxInputBase = {
  ...globalBaseStyles,
  display: 'flex',
  gap: '4',
};

export const checkboxInputRecipe = defineRecipe({
  className: 'checkbox-input',
  jsx: ['CheckboxInput'],
  base: checkboxInputBase,
  variants: {},
});
