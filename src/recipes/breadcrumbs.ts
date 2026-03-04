import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

export const breadcrumbsRecipe = defineSlotRecipe({
  className: 'breadcrumbs',
  jsx: ['Breadcrumbs'],
  slots: ['wrapper', 'slash', 'linkSegment', 'currentSegment'],
  base: {
    wrapper: {
      ...globalBaseStyles,
      display: 'flex',
      gap: '6',
      alignItems: 'center',
      fontFamily: 'mono',
      fontSize: '14',
      '& li': {
        display: 'flex',
        gap: '6',
        alignItems: 'center',
      },
    },
    slash: {
      fontFamily: 'mono',
      fontSize: '14',
      color: 'text.placeholder',
    },
    linkSegment: {
      fontFamily: 'mono',
      fontSize: '14',
      color: 'text.subtlest',
      fontWeight: 'normal',
      _hover: {
        color: 'link',
      },
      _focusVisible: {
        color: 'blue.50',
      },
    },
    currentSegment: {
      fontFamily: 'mono',
      fontSize: '14',
      color: 'text',
      fontWeight: 'bold',
    },
  },
});
