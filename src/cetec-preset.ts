import { definePreset, type Preset } from '@pandacss/dev';
import pandaBasePreset from '@pandacss/preset-base';

import * as regularRecipes from './recipes/recipes-regular';
import * as slotRecipes from './recipes/recipes-slot';
import * as tokens from './styles/primitives';
import * as semanticTokens from './styles/semantics';
import { breakpoints } from './styles/utilities/breakpoints';
import { conditions } from './styles/utilities/conditions';
import { containerSizes } from './styles/utilities/containerSizes';
import { dropShadowProperty } from './styles/utilities/dropShadows';
import { filtersProperty } from './styles/utilities/filters';
import { fontVariantsProperty } from './styles/utilities/fontVariants';
import { globalCss } from './styles/utilities/globalStyle';
import { keyframes } from './styles/utilities/keyframes';
import { layerStyles } from './styles/utilities/layerStyles';
import { textStyles } from './styles/utilities/textStyles';
import { transitionProperty } from './styles/utilities/transitions';

import type { RecipeConfig, SlotRecipeConfig } from '@pandacss/types';

const presetRecipes = Object.fromEntries(
  Object.entries(regularRecipes).map(([key, value]) => [
    key.replace(/Recipe$/, ''),
    value,
  ]),
) as unknown as Record<string, Partial<RecipeConfig>>;

const presetSlotRecipes = Object.fromEntries(
  Object.entries(slotRecipes).map(([key, value]) => [
    key.replace(/Recipe$/, ''),
    value,
  ]),
) as unknown as Record<string, Partial<SlotRecipeConfig>>;

// https://panda-css.com/docs/concepts/extend#removing-something-from-the-base-presets
// Omit default patterns here
const {
  box: _box,
  divider: _divider,
  ...pandaBasePresetPatterns
} = pandaBasePreset.patterns;
const pandaBasePresetConditions = pandaBasePreset.conditions;
const pandaBasePresetUtilities = pandaBasePreset.utilities;
const pandaBasePresetGlobalCss = pandaBasePreset.globalCss;

/**
 * Panda CSS preset containing Cetec tokens, semantic tokens, recipes,
 * utilities, patterns, global CSS, and conditions.
 *
 * Add this preset to a Panda configuration to generate styles that match the
 * design system. It extends Panda's base preset while replacing its
 * `dropShadow` utility and omitting the base `box` and `divider` patterns.
 *
 * @example
 * ```ts
 * import { cetecPreset } from 'cetec-design-system';
 *
 * export default defineConfig({ presets: [cetecPreset] });
 * ```
 */
export const cetecPreset: Preset = definePreset({
  name: 'cetecPreset',
  theme: {
    extend: {
      tokens: {
        ...tokens,
      },
      semanticTokens: {
        colors: semanticTokens.colors,
        fontSizes: semanticTokens.fontSizes,
        shadows: semanticTokens.shadows,
        zIndex: semanticTokens.zIndex,
      },
      breakpoints: breakpoints,
      containerSizes: containerSizes,
      keyframes: keyframes,
      layerStyles: layerStyles,
      textStyles: textStyles,
      recipes: presetRecipes,
      slotRecipes: presetSlotRecipes,
    },
  },
  utilities: {
    ...pandaBasePresetUtilities,
    // replaces (not extends) Panda's half-baked dropShadow utility
    dropShadow: dropShadowProperty,
    // Custom utilities
    // https://panda-css.com/docs/references/config#utilities
    extend: {
      fontVariantsProperty,
      filtersProperty,
      transitionProperty,
    },
  },
  patterns: {
    extend: {
      ...pandaBasePresetPatterns,
      container: {
        transform(props) {
          return Object.assign(
            {
              position: 'relative',
              width: '100%',
              maxWidth: '7xl',
              mx: 'auto',
              px: { base: '24', md: '32', lg: '48' },
            },
            props,
          );
        },
      },
    },
  },
  globalCss: {
    ...pandaBasePresetGlobalCss,
    ...globalCss,
  },
  conditions: {
    ...pandaBasePresetConditions,
    ...conditions,
  },
});
