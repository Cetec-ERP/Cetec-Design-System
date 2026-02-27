import { defineRecipe } from '@pandacss/dev';
import { globalBaseStyles } from '~/styles/utilities';

const boxBase = {
  ...globalBaseStyles,
};

const boxVariants = {};

export const boxRecipe = defineRecipe({
  className: 'box',
  jsx: ['Box'],
  base: boxBase,
  variants: boxVariants,
  defaultVariants: {},
});
