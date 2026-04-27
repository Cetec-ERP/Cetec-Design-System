import { defineSlotRecipe } from '@pandacss/dev';

export const kbdRecipe = defineSlotRecipe({
  className: 'kbd',
  slots: ['kbdGroup', 'key'],
  base: {
    kbdGroup: {
      display: 'inline-flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '2',
      verticalAlign: 'middle',
    },
    key: {
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
      fontSize: '10',
    },
  },
  variants: {
    variant: {
      default: {
        key: {
          fontSize: '10',
        },
      },
      symbol: {
        key: {
          fontSize: '12',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
