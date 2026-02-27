import { defineRecipe } from '@pandacss/dev';

const toggleInputBase = {
  display: 'grid',
  gridTemplateColumns: '32px auto',
  gap: '6',
  userSelect: 'none',
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

export const toggleInputRecipe = defineRecipe({
  className: 'toggleInput',
  jsx: ['ToggleInput'],
  base: toggleInputBase,
  variants: {},
});
