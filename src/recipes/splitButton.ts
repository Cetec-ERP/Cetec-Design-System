import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

import { buttonVariantColors } from './button';

// The halves are a `Button` and an `IconButton`, so each keeps the button
// recipe's colors, sizes, and states. These slots only join them: the inner
// corners are squared, the inner borders are dropped, and the divider draws
// the line between them in the icon color of the variant.
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
  // The icon is blended with the button background, but the divider sits
  // between the halves, on the page. So the divider paints the button
  // background and draws the line on top of it with the icon's color and
  // blend mode. `isolation` keeps the blend inside the divider. It stays at
  // full strength next to a disabled or loading half, where it reads as the
  // edge of the half that is still available.
  divider: {
    position: 'relative',
    isolation: 'isolate',
    flexShrink: 0,
    alignSelf: 'stretch',
    width: '1',
    _before: {
      content: '""',
      position: 'absolute',
      inset: '0',
    },
  },
};

// The divider of one variant, from that variant's button colors.
const dividerColors = (variant: keyof typeof buttonVariantColors) => {
  const { bg, icon, iconBlend } = buttonVariantColors[variant];

  return {
    divider: {
      bg,
      _before: { bg: icon, mixBlendMode: iconBlend },
    },
  };
};

export const splitButtonRecipe = defineSlotRecipe({
  className: 'splitButton',
  jsx: ['SplitButton'],
  slots: ['root', 'action', 'toggle', 'divider'],
  base: splitButtonBase,
  variants: {
    // Matches the `button` recipe variant of the same name. Only the
    // divider changes here: it is drawn in the icon color of the variant.
    variant: {
      standard: dividerColors('standard'),
      primary: dividerColors('primary'),
      cta: dividerColors('cta'),
      hollow: dividerColors('hollow'),
      danger: dividerColors('danger'),
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
