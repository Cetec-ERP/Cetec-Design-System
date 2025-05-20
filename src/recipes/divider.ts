import { defineRecipe } from '@pandacss/dev';

const dividerBase = {
  '--divider-weight': '1',
  borderStyle: 'solid',
  color: { base: 'slate.20', _dark: 'slate.80' },
  borderColor: 'current',
  minWidth: '1',
  minHeight: '1',
  flexGrow: 0,
  flexShrink: 0,
};

const dividerVariants = {
  direction: {
    horizontal: {
      height: '1',
      width: 'full',
      borderTopWidth: 'var(--divider-weight)',
    },
    vertical: {
      height: 'full',
      width: '1',
      borderLeftWidth: 'var(--divider-weight)',
    },
  },
  weight: {
    thin: { '--divider-weight': 'sizes.1' },
    medium: { '--divider-weight': 'sizes.2' },
    bold: { '--divider-weight': 'sizes.4' },
  },
};

export const dividerRecipe = defineRecipe({
  className: 'divider',
  jsx: ['Divider'],
  base: dividerBase,
  variants: dividerVariants,
  defaultVariants: {
    direction: 'horizontal',
    weight: 'thin',
  },
});
