import { defineRecipe } from '@pandacss/dev';

const BreadcrumbsBase = {
  display: 'flex',
  alignItems: 'center',
  '& li': {
    display: 'flex',
    alignItems: 'center',
  },
  '& a': {
    color: 'text.subtlest',
    _focusVisible: {
      color: 'link',
    },
  },
  '& p': {
    color: 'text',
  },
  '& span': {
    mx: '6',
    color: 'text.subtlest',
  },
};

export const breadcrumbsRecipe = defineRecipe({
  className: 'breadcrumbs',
  jsx: ['Breadcrumbs'],
  base: BreadcrumbsBase,
});
