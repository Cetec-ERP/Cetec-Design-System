import { defineRecipe } from '@pandacss/dev';

const dividerBase = {
  borderWidth: '1',
  borderStyle: 'solid',
  // height: '1',
  // width: '100%',
  color: { base: 'slate.70', _dark: 'slate.20' },
  // Flex things...
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: '100%',
};

const dividerVariants = {
  direction: {
    horizontal: {
      // orientation: 'horizontal',
      height: '1',
      width: '100%',
    },
    vertical: {
      // orientation: 'vertical',
      height: '100%',
      width: '1',
    },
  },
  // weight: {
  //   thin: { borderWidth: '1px' },
  //   medium: { borderWidth: '2px' },
  //   bold: { borderWidth: '4px' },
  // }
};

export const dividerRecipe = defineRecipe({
  className: 'divider',
  jsx:['divider'],
  base: dividerBase,
  variants: dividerVariants,
  defaultVariants: {
    direction: 'horizontal',
    // weight: 'thin',
  },
});
