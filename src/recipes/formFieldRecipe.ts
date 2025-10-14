import { defineSlotRecipe } from '@pandacss/dev';

const formFieldBase = {
  formFieldContainer: {
    _disabled: {
      opacity: '0.4',
      pointerEvents: 'none',
    },
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6',
  },
  labelWrapper: {
    '& p': {
      color: { base: 'slate.90', _dark: 'slate.0' },
      // display: 'flex',
      // gap: '4',
    },
  },
  headLabel: {
    display: 'flex',
    gap: '4',
  },
};

const formFieldVariants = {
  layout: {
    default: {
      formFieldContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6',
      },
    },
    inline: {
      formFieldContainer: {
        display: 'grid',
        gap: '12',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'start',
      },
    },
  },
};

export const formFieldRecipe = defineSlotRecipe({
  className: 'formfield',
  jsx: ['Formfield'],
  slots: ['formFieldContainer', 'contentWrapper', 'labelWrapper', 'headLabel'],
  base: formFieldBase,
  variants: formFieldVariants,
  defaultVariants: {
    layout: 'default',
  },
});
