import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

// The halves are a `Button` and an `IconButton`, so each keeps the button
// recipe's colors, sizes, and states. These slots only join them: the inner
// corners are squared, the inner borders are dropped, and the divider draws
// the line between them.
const splitButtonBase = {
  root: {
    ...globalBaseStyles,
    display: 'inline-flex',
    alignItems: 'stretch',
    width: 'fit',
    minWidth: '0',
    verticalAlign: 'middle',
  },
  action: {
    minWidth: '0',
    borderEndRadius: '0',
    borderInlineEndWidth: '0',
    // A focus ring would otherwise be painted over by the toggle.
    _focusVisible: { zIndex: 'raised' },
  },
  toggle: {
    alignSelf: 'stretch',
    borderStartRadius: '0',
    borderInlineStartWidth: '0',
    _focusVisible: { zIndex: 'raised' },
    // The caret turns over while the menu is open, as the Select caret does.
    // Menu sets `aria-expanded` on the toggle.
    _icon: {
      transitionDuration: 'fast',
      transitionProperty: 'all',
      transitionTimingFunction: 'default',
    },
    _expanded: {
      _icon: {
        transform: 'rotate(-180deg)',
        transformOrigin: 'center',
      },
    },
  },
  divider: {
    flexShrink: 0,
    alignSelf: 'stretch',
    width: '1',
  },
};

export const splitButtonRecipe = defineSlotRecipe({
  className: 'splitButton',
  jsx: ['SplitButton'],
  slots: ['root', 'action', 'toggle', 'divider'],
  base: splitButtonBase,
  variants: {
    // Matches the `button` recipe variant of the same name. Only the
    // divider color changes here.
    variant: {
      standard: {
        divider: { bg: 'border' },
      },
      primary: {
        divider: { bg: 'text.inverse', opacity: '0.3' },
      },
      cta: {
        divider: { bg: 'neutral.90', opacity: '0.3' },
      },
      hollow: {
        divider: { bg: 'border' },
      },
      danger: {
        divider: { bg: 'neutral.0', opacity: '0.3' },
      },
    },
    // Sizes are applied by the button halves. They are declared here so the
    // `size` prop has the same values as `Button`, without `xl`.
    size: {
      sm: {},
      md: {},
      lg: {},
    },
  },
  defaultVariants: {
    variant: 'standard',
    size: 'md',
  },
});
