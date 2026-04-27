import { defineRecipe } from '@pandacss/dev';

export const kbdGroupRecipe = defineRecipe({
  className: 'kbdGroup',
  jsx: ['KbdGroup'],
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2',
    verticalAlign: 'middle',
  },
});
