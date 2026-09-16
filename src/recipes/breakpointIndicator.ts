import { defineRecipe } from '@pandacss/dev';

export const breakpointIndicatorRecipe = defineRecipe({
  className: 'breakpointIndicator',
  jsx: ['BreakpointIndicator'],
  base: {
    zIndex: '1100',
  },
  variants: {
    variant: {
      default: {
        position: 'relative',
        bottom: 'auto',
        right: 'auto',
      },
      fixed: {
        position: 'fixed',
        bottom: '40',
        right: '16',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
