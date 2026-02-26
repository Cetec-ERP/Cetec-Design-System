import { defineRecipe } from '@pandacss/dev';

const checkboxInputBase = {
  display: 'flex',
  alignItems: 'start',
  '&.cetec-label': {
    fontSize: '16',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
};

export const checkboxInputRecipe = defineRecipe({
  className: 'checkboxInput',
  jsx: ['CheckboxInput'],
  base: checkboxInputBase,
});
