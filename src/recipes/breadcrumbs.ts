import { defineRecipe } from '@pandacss/dev';
import { globalBaseStyles } from '~/styles/utilities';

export const breadcrumbsRecipe = defineRecipe({
  className: 'breadcrumbs',
  jsx: ['Breadcrumbs'],
  base: {
    ...globalBaseStyles,
    display: 'flex',
    alignItems: 'center',
    '& li': {
      display: 'flex',
      alignItems: 'center',
    },
    '& a': {
      color: { base: 'slate.60', _dark: 'slate.30' },
      _focusVisible: {
        color: 'blue.50',
      },
    },
    '& p': {
      color: { base: 'slate.90', _dark: 'slate.0' },
    },
    '& span': {
      mx: '6',
      color: { base: 'slate.20', _dark: 'slate.50' },
    },
  },
});
