import { definePreset, type Preset } from '@pandacss/dev';

import { cetecPreset } from '../cetec-preset';
import { globalCss } from '../styles/utilities/globalStyle';

import { printReset } from './printReset';

type TokenNode = { [key: string]: unknown };

/** Conditions a printed document never matches. */
const screenOnlyConditions = ['_dark', '_printDoc'];

const isConditionalValue = (value: unknown): value is TokenNode =>
  typeof value === 'object' && value !== null && 'base' in value;

/**
 * Removes dark values from semantic tokens. The `_printDoc` reset goes too,
 * because it only copies the light value back over the dark one.
 *
 * A token left with only a `base` value becomes a plain value. Other
 * conditions, such as `_thermal`, stay.
 */
export const withoutDarkValues = <T extends object>(tokens: T): T => {
  const walk = (node: unknown): unknown => {
    if (typeof node !== 'object' || node === null) return node;
    return Object.fromEntries(
      Object.entries(node).map(([key, child]) => {
        if (key === 'value' && isConditionalValue(child)) {
          const kept = Object.fromEntries(
            Object.entries(child).filter(
              ([condition]) => !screenOnlyConditions.includes(condition),
            ),
          );
          const keys = Object.keys(kept);
          return [key, keys.length === 1 ? kept.base : kept];
        }
        return [key, walk(child)];
      }),
    );
  };
  return walk(tokens) as T;
};

const extend = cetecPreset.theme?.extend ?? {};

/**
 * The preset that builds `print.css`. It is the design-system preset with
 * dark token values and keyframes removed, and the app reset swapped for the
 * print reset. Recipes, tokens, text styles, and conditions are the same, so
 * class names match `styles.css`.
 */
export const printPreset: Preset = definePreset({
  ...cetecPreset,
  name: 'cetecPrintPreset',
  theme: {
    ...cetecPreset.theme,
    extend: {
      ...extend,
      semanticTokens: withoutDarkValues(extend.semanticTokens ?? {}),
      // App animations do not print.
      keyframes: {},
    },
  },
  // The app reset is for screens. Keep only the font variables from it.
  globalCss: { ...printReset, html: globalCss.html },
});
