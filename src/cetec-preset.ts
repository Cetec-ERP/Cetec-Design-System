import { definePreset, type Preset } from '@pandacss/dev';
import pandaBasePreset from '@pandacss/preset-base';

import * as regularRecipes from './recipes/recipes-regular';
import * as slotRecipes from './recipes/recipes-slot';
import * as tokens from './styles/primitives';
import * as semanticTokens from './styles/semantics';
import {
  breakpoints,
  conditions,
  containerSizes,
  filtersProperty,
  fontVariantsProperty,
  globalCss,
  keyframes,
  layerStyles,
  textStyles,
  transitionProperty,
} from './styles/utilities';

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

const theme = {
  tokens: {
    ...tokens,
  },
  semanticTokens: {
    colors: semanticTokens.colors,
    shadows: semanticTokens.shadows,
    zIndex: semanticTokens.zIndex,
  },
};

export const cetecPreset: Preset = definePreset({
  name: 'cetecPreset',
  theme: {
    extend: {
      tokens: {
        ...theme.tokens,
      },
      semanticTokens: {
        colors: theme.semanticTokens.colors,
        shadows: theme.semanticTokens.shadows,
        zIndex: theme.semanticTokens.zIndex,
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
