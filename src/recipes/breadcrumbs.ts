import { defineRecipe } from '@pandacss/dev';

const BreadcurmbsBase = {
  display: 'flex',
  alignItems: 'center',
  '& li': {
    display: 'flex',
    alignItems: 'center',
  },
  '& a': {
    color: { base: 'slate.60', _dark: 'slate.60' },
  },
  '& p': {
    color: { base: 'slate.90', _dark: 'slate.0' },
  },
  '& span': {
    mx: '6',
    color: 'slate.20',
  },
};

export const breadcurmbsRecipe = defineRecipe({
  className: 'breadcurmbs',
  jsx: ['Breadcurmbs'],
  base: BreadcurmbsBase,
});
