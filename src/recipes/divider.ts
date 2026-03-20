import { defineRecipe } from '@pandacss/dev';

export const dividerRecipe = defineRecipe({
  className: 'divider',
  jsx: ['Divider'],
  base: {
    '--divider-weight': 'sizes.1',
    borderStyle: 'solid',
    color: 'border',
    borderColor: 'current',
    borderWidth: '0',
    minWidth: '1',
    minHeight: '1',
  },
  variants: {
    direction: {
      horizontal: {
        width: 'stretch',
        borderTopWidth: 'var(--divider-weight)',
      },
      vertical: {
        height: 'stretch',
        borderLeftWidth: 'var(--divider-weight)',
      },
    },
    weight: {
      thin: { '--divider-weight': 'sizes.1' },
      medium: { '--divider-weight': 'sizes.2' },
      thick: { '--divider-weight': 'sizes.4' },
      thicker: { '--divider-weight': 'sizes.6' },
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    weight: 'thin',
  },
});
