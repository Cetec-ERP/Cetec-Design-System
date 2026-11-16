import { defineRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

/** A color token for light mode, then one for dark mode. */
type ThemePair = [light: string, dark: string];

type TagTreatment = { color: ThemePair; bg: ThemePair };

const themeVar = ([light, dark]: ThemePair) => ({
  base: `token(colors.${light})`,
  _dark: `token(colors.${dark})`,
});

/*
 * Each hue sets the colors for both treatments as CSS variables, and `variant`
 * picks which pair to use. Compound variants would do the same job, but they
 * stop `size`, `variant`, and `hue` from accepting conditional values. See
 * standards/recipes/conditional-variants.md.
 */
const hueColors = (defaultTreatment: TagTreatment, bold: TagTreatment) => ({
  '--tag-default-color': themeVar(defaultTreatment.color),
  '--tag-default-bg': themeVar(defaultTreatment.bg),
  '--tag-bold-color': themeVar(bold.color),
  '--tag-bold-bg': themeVar(bold.bg),
});

const tagBase = {
  ...globalBaseStyles,
  display: 'flex',
  alignItems: 'center',
  py: '0',
  borderRadius: '2',
  gap: '1',
  px: '4',
  w: 'fit',
  fontWeight: 'medium',
  lineHeight: 'tight',
  whiteSpace: 'nowrap',
};
const tagVariant = {
  // Both sizes set every property they change, so a conditional value such
  // as { base: 'sm', md: 'md' } switches back at the breakpoint.
  size: {
    sm: {
      h: '16',
      fontSize: '12',
    },
    md: {
      h: '20',
      fontSize: '14',
    },
  },
  variant: {
    default: {
      color: 'var(--tag-default-color)',
      bg: 'var(--tag-default-bg)',
    },
    bold: {
      color: 'var(--tag-bold-color)',
      bg: 'var(--tag-bold-bg)',
    },
  },
  hue: {
    slate: hueColors(
      { color: ['slate.70', 'slate.20'], bg: ['slate.10', 'slate.70'] },
      { color: ['slate.0', 'slate.80'], bg: ['slate.50', 'slate.20'] },
    ),
    tan: hueColors(
      { color: ['tan.70', 'tan.20'], bg: ['tan.10', 'tan.70'] },
      { color: ['slate.0', 'tan.80'], bg: ['tan.50', 'tan.20'] },
    ),
    red: hueColors(
      { color: ['red.70', 'red.10'], bg: ['red.10', 'red.70'] },
      { color: ['slate.0', 'red.80'], bg: ['red.50', 'red.20'] },
    ),
    tomato: hueColors(
      { color: ['tomato.70', 'tomato.20'], bg: ['tomato.10', 'tomato.70'] },
      { color: ['slate.0', 'tomato.80'], bg: ['tomato.50', 'tomato.20'] },
    ),
    orange: hueColors(
      { color: ['orange.70', 'orange.20'], bg: ['orange.10', 'orange.70'] },
      { color: ['orange.5', 'orange.80'], bg: ['orange.60', 'orange.20'] },
    ),
    yellow: hueColors(
      { color: ['yellow.60', 'yellow.10'], bg: ['yellow.10', 'yellow.60'] },
      { color: ['yellow.70', 'yellow.90'], bg: ['yellow.20', 'yellow.20'] },
    ),
    green: hueColors(
      { color: ['green.70', 'green.20'], bg: ['green.10', 'green.70'] },
      { color: ['slate.0', 'green.80'], bg: ['green.50', 'green.20'] },
    ),
    grass: hueColors(
      { color: ['grass.70', 'grass.10'], bg: ['grass.10', 'grass.70'] },
      { color: ['slate.0', 'grass.80'], bg: ['grass.60', 'grass.20'] },
    ),
    mint: hueColors(
      { color: ['mint.80', 'mint.30'], bg: ['mint.10', 'mint.80'] },
      { color: ['slate.0', 'mint.80'], bg: ['mint.70', 'mint.20'] },
    ),
    cyan: hueColors(
      { color: ['cyan.70', 'cyan.20'], bg: ['cyan.10', 'cyan.70'] },
      { color: ['cyan.5', 'cyan.80'], bg: ['cyan.60', 'cyan.30'] },
    ),
    blue: hueColors(
      { color: ['blue.70', 'blue.20'], bg: ['blue.10', 'blue.70'] },
      { color: ['slate.0', 'blue.90'], bg: ['blue.50', 'blue.40'] },
    ),
    indigo: hueColors(
      { color: ['indigo.70', 'indigo.10'], bg: ['indigo.10', 'indigo.70'] },
      { color: ['indigo.5', 'indigo.80'], bg: ['indigo.50', 'indigo.20'] },
    ),
    purple: hueColors(
      { color: ['purple.70', 'purple.20'], bg: ['purple.10', 'purple.70'] },
      { color: ['slate.0', 'purple.80'], bg: ['purple.50', 'purple.20'] },
    ),
    violet: hueColors(
      { color: ['violet.70', 'violet.10'], bg: ['violet.10', 'violet.70'] },
      { color: ['violet.5', 'violet.80'], bg: ['violet.60', 'violet.20'] },
    ),
    pink: hueColors(
      { color: ['pink.70', 'pink.10'], bg: ['pink.10', 'pink.70'] },
      { color: ['pink.5', 'pink.80'], bg: ['pink.70', 'pink.20'] },
    ),
    rose: hueColors(
      { color: ['rose.70', 'rose.10'], bg: ['rose.10', 'rose.70'] },
      { color: ['rose.5', 'rose.80'], bg: ['rose.60', 'rose.20'] },
    ),
    magenta: hueColors(
      { color: ['magenta.70', 'magenta.10'], bg: ['magenta.10', 'magenta.70'] },
      { color: ['magenta.5', 'magenta.80'], bg: ['magenta.60', 'magenta.20'] },
    ),
  },
  iconBefore: {
    true: {
      gap: '1',
      pl: '1',
    },
  },
  iconAfter: {
    true: {
      gap: '1',
      pr: '1',
    },
  },
  hasIcon: {
    true: {},
    false: {
      px: '4',
    },
  },
};

export const tagRecipe = defineRecipe({
  className: 'tag',
  jsx: ['Tag'],
  base: tagBase,
  variants: tagVariant,
  defaultVariants: {
    size: 'md',
    variant: 'default',
    hue: 'slate',
  },
});
