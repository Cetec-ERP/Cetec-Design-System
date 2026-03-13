import { defineRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

export const listRecipe = defineRecipe({
  className: 'list',
  jsx: ['List'],
  base: {
    ...globalBaseStyles,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    gap: '0',
  },
  variants: {},
});
