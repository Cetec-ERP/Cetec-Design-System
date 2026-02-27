import { defineRecipe } from '@pandacss/dev';

const checkboxInputBase = {
  display: 'flex',
  alignItems: 'start',
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

export const checkboxInputRecipe = defineRecipe({
  className: 'checkboxInput',
  jsx: ['CheckboxInput'],
  base: checkboxInputBase,
});
