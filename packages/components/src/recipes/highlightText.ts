import { defineRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

export const highlightTextRecipe = defineRecipe({
  className: 'highlightText',
  jsx: ['HighlightText'],
  base: {
    ...globalBaseStyles,
    bg: { base: 'gold.10', _dark: 'gold.60' },
    color: 'text',
    borderRadius: '2',
    lineHeight: 'inherit',
  },
  variants: {},
});
