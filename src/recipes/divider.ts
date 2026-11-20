import { defineRecipe } from '@pandacss/dev';

export const dividerRecipe = defineRecipe({
  className: 'divider',
  jsx: ['Divider'],
  base: {
    '--divider-weight': 'sizes.1',
    borderStyle: 'solid',
    color: 'border',
    borderColor: 'current',
    borderWidth: '0',
    minWidth: '1',
    minHeight: '1',
    // On paper, a divider is a hairline rule. Thermal ink turns it solid
    // black at 1.5 pt through the paper tokens.
    _printDoc: {
      color: 'paper.hairline',
    },
  },
  variants: {
    direction: {
      horizontal: {
        width: 'stretch',
        borderTopWidth: 'var(--divider-weight)',
        _printDoc: { my: 'print.8' },
        // On paper, a divider right after a page break starts at the top of
        // its page.
        '.cetec-printDoc .cetec-printPageBreak__root + &': { mt: '0' },
      },
      vertical: {
        height: 'stretch',
        borderLeftWidth: 'var(--divider-weight)',
      },
    },
    weight: {
      thin: {
        '--divider-weight': 'sizes.1',
        _printDoc: { '--divider-weight': 'borderWidths.paper.rule' },
      },
      medium: { '--divider-weight': 'sizes.2' },
      thick: { '--divider-weight': 'sizes.4' },
      thicker: { '--divider-weight': 'sizes.6' },
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    weight: 'thin',
  },
});
