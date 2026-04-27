import { defineRecipe } from '@pandacss/dev';

export const kbdRecipe = defineRecipe({
  className: 'kbd',
  jsx: ['Kbd'],
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1',
    h: '16',
    w: 'fit',
    minW: '16',
    rounded: '6',
    cornerShape: 'squircle',
    bg: 'bg.neutral',
    px: '4',
    fontFamily: 'mono',
    fontVariant: 'mono',
    lineHeight: 'tight',
    fontWeight: 'bold',
    color: 'text.subtle',
    userSelect: 'none',
    pointerEvents: 'none',
  },
  variants: {
    variant: {
      default: {
        fontSize: '10',
      },
      symbol: {
        fontSize: '12',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
