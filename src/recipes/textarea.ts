import { defineRecipe } from '@pandacss/dev';

const textareaBase = {
  position: 'relative',
  width: 'full',
  color: { base: 'slate.90', _dark: 'slate.0' },
  borderWidth: '1',
  borderStyle: 'solid',
  borderColor: 'slate.30',
  borderRadius: '4',
  lineHeight: 'tight',
  outlineWidth: '1',
  outlineStyle: 'solid',
  outlineColor: 'transparent',
  resize: 'both',
  _focus: {
    outlineColor: { base: 'slate.90', _dark: 'slate.0' },
    borderColor: { base: 'slate.90', _dark: 'slate.0' },
  },
  _error: {
    display: 'inline-grid',
    borderColor: 'error.default',
    _focus: {
      borderColor: { base: 'error.default', _dark: 'error.default' },
      outlineColor: { base: 'error.default', _dark: 'error.default' },
    },
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
  '&[data-error]:focus': {
    borderColor: 'error.default',
  },
};

const textareaVariants = {
  size: {
    small: {
      py: '0',
      px: '8',
      minHeight: '48',
      fontSize: '14',
    },
    medium: {
      py: '3',
      px: '10',
      fontSize: '16',
      minHeight: '64',
    },
    large: {
      py: '7',
      px: '12',
      fontSize: '16',
      minHeight: '80',
    },
  },
  autoSize: {
    true: {
      fieldSizing: 'content',
    },
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
