import { defineRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

export const highlightTextRecipe = defineRecipe({
  className: 'highlightText',
  jsx: ['HighlightText'],
  base: {
    ...globalBaseStyles,
    bg: 'bg.accent.gold.subtle',
    color: 'text',
    borderRadius: '2',
  },
  variants: {},
});
