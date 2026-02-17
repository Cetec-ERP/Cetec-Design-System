import { definePreset, type Preset } from '@pandacss/dev';
import pandaBasePreset from '@pandacss/preset-base';
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
import * as componentRecipes from './recipes/index';

// Separate slotRecipes from regular recipes
const {
  buttonRecipe,
  iconButtonRecipe,
  checkBoxRecipe,
  radioRecipe,
  tooltipRecipe,
  menuRecipe,
  formFieldRecipe,
  spinnerRecipe,
  textInputRecipe,
  ...regularRecipes
} = componentRecipes;

// Transform recipe keys: remove 'Recipe' suffix to match component imports
// e.g., { boxRecipe: {...} } becomes { box: {...} }
const transformedRecipes = Object.fromEntries(
  Object.entries(regularRecipes).map(([key, value]) => [
    key.replace(/Recipe$/, ''),
    value,
  ]),
);

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
      },
      breakpoints: breakpoints,
      containerSizes: containerSizes,
      keyframes: keyframes,
      layerStyles: layerStyles,
      textStyles: textStyles,
      recipes: {
        ...transformedRecipes,
      },
      slotRecipes: {
        button: buttonRecipe,
        iconButton: iconButtonRecipe,
        checkbox: checkBoxRecipe,
        radio: radioRecipe,
        tooltip: tooltipRecipe,
        menu: menuRecipe,
        formField: formFieldRecipe,
        spinner: spinnerRecipe,
        textInput: textInputRecipe,
      },
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
