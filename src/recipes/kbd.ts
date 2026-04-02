import { defineRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

export const kbdRecipe = defineRecipe({
  className: 'kbd',
  jsx: ['Kbd'],
  base: {
    ...globalBaseStyles,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1',
    h: '16',
    w: 'fit',
    minW: '16',
    rounded: '4',
    bg: 'bg.neutral',
    px: '1',
    fontFamily: 'mono',
    fontSize: '12',
    fontWeight: 'medium',
    color: 'text',
    userSelect: 'none',
    pointerEvents: 'none',
  },
  variants: {},
});
