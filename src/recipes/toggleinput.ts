import { defineRecipe } from '@pandacss/dev';

const toggleInputBase = {
  display: 'grid',
  gap: '8',
  gridTemplateColumns: '40px auto',
  '&.cetec-label': {
    fontSize: '16',
  },
  '& + .cetec-toggleInput': {
    mt: '8',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
};

export const toggleInputRecipe = defineRecipe({
  className: 'toggleInput',
  jsx: ['ToggleInput'],
  base: toggleInputBase,
});
