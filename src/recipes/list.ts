import { defineRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

import { listDensityVars } from './listDensity';

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
  variants: {
    density: listDensityVars,
  },
  defaultVariants: {
    density: 'compact',
  },
  staticCss: [{ density: ['*'] }],
});
