import { defineRecipe } from '@pandacss/dev';

const textareaBase = {
    position: 'relative',
    display: 'inline-grid',
    verticalAlign: 'top',
    alignItems: 'center',
    padding: '0',
    fontFamily: 'body',
    fontSize: '16',
    fontWeight: 'normal',
    lineHeight: 'normal',
    color: { base: 'slate.90', _osDark: 'slate.5' },
    borderRadius: '8',
    width: 'full',
    '&::after, & textarea': {
      width: 'auto',
      minWidth: '16',
      maxWidth: 'full',
      font: 'inherit',
      py: '4',
      px: '8',
      m: '0',
      resize: 'none',
      appearance: 'none',
      borderWidth: '1',
      borderStyle: 'solid',
      borderRadius: '4',
      borderColor: 'transparent',
      background: { base: 'slate.0', _osDark: 'slate.90' },
      _hover: {
        borderColor: { base: 'slate.20', _osDark: 'slate.30' },
      },
      _focus: {
        borderColor: { base: 'slate.90', _osDark: 'slate.5' },
      }
    },
    _after: {
      content: 'attr(data-value) " "',
      outline: '1px solid olive',
      whiteSpace: 'pre-wrap',
      transform: 'translate(4px, 4px)',
      opacity: '0.3',
    },
    '& textarea': {
    },
    gridTemplateColumns: 'auto 1fr',
};

const textareaVariants = {
  variant: {
    autoGrow: {
      width: 'fit-content',
    },
    stacked: {
      gridTemplateRows: 'auto 1fr',
      alignItems: 'stretch',
      '&::after, & textarea': {
        gridArea: '2 / 1',
      },
      '& textarea': {
        background: { base: 'slate.0', _osDark: 'slate.90' },
        borderColor: { base: 'slate.40', _osDark: 'slate.50' },
      },
    },
    internalLabel: {
    },
  },
};

export const textareaRecipe = defineRecipe({
  className: 'textarea',
  jsx: ['Textarea'],
  base: textareaBase,
  variants: textareaVariants,
  defaultVariants: {
    variant: 'autoGrow'
  },
});
