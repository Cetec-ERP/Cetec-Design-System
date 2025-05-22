import { defineRecipe } from '@pandacss/dev';

const textareaBase = {
  position: 'relative',
  color: { base: 'slate.90', _dark: 'slate.0' },
  borderWidth: '1',
  borderStyle: 'solid',
  borderColor: 'slate.30',
  borderRadius: '4',
  outlineWidth: '2',
  outlineStyle: 'solid',
  outlineColor: 'transparent',
  outlineOffset: '1',
  _focusVisible: {
    borderColor: 'slate.90',
    outlineColor: { base: 'slate.90', _dark: 'slate.0' },
  },  
  _error: {
    display: 'inline-grid',
    borderColor: 'red.50',
  },
  _placeholder: {
    color: {
      base: 'slate.50',
      _dark: 'slate.40',
    },
  },
  _disabled: {
    opacity: 0.4,
  },
};

const textareaVariants = {
  size:{
    small:{
      px:'8',
      minHeight:'48',
      fontSize:'14',
    },
    medium:{
      py:'3',
      px:'10',
      fontSize:'16',
      minHeight:'64',
    },
    large:{
      py: '7',
      px: '12',
      fontSize: '16',
      minHeight:'80',
    }
  },
};

export const textareaRecipe = defineRecipe({
  className: 'textarea',
  jsx: ['Textarea'],
  base: textareaBase,
  variants: textareaVariants,
  defaultVariants: {
    size: 'medium',
  },
});
