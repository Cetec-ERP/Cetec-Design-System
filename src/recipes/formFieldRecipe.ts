import { defineSlotRecipe } from '@pandacss/dev';

const formFieldBase = {
  // formFeildContainer:{
  //   display: 'flex',
  // },
  contentWrapper:{
    display: 'flex',
    flexDirection: 'column',
    gap: '6'
  },
  labelWrapper:{
    "& p":{
      color: {base: 'slate.90', _dark: 'slate.0'},
      // display: 'flex',
      // gap: '4',
    }
  }
};

const formFieldVariants = {
  layout: {
    default: {
      formFeildContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6',
      },
    },
    inline: {
      formFeildContainer: {
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
  slots: ['formFeildContainer', 'contentWrapper', 'labelWrapper'],
  base: formFieldBase,
  variants: formFieldVariants,
  defaultVariants: {
    layout: 'default',
  },
});
