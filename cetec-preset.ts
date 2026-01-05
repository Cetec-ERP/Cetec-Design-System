import {
  defineTokens,
  defineSemanticTokens,
  definePreset,
} from '@pandacss/dev';
import pandaBasePreset from '@pandacss/preset-base';
import * as tokens from './src/styles/tokens';
import * as semanticTokens from './src/styles/semanticTokens';
import { globalCss } from './src/styles/globalStyle';
import { conditions } from './src/styles/conditions';
import * as componentRecipes from './src/recipes/index';

const {
  checkboxRecipe,
  radioRecipe,
  tooltipRecipe,
  menuRecipe,
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
// omit default patterns here
const { box, divider, ...pandaBasePresetPatterns } = pandaBasePreset.patterns;
const pandaBasePresetConditions = pandaBasePreset.conditions;
const pandaBasePresetUtilities = pandaBasePreset.utilities;
const pandaBasePresetGlobalCss = pandaBasePreset.globalCss;

const { keyframes, breakpoints, containerSizes, fontVariants, ...baseTokens } =
  tokens;

const theme = {
  tokens: defineTokens({
    ...baseTokens,
    spacing: tokens.sizes, // Map spacing to our size scale for consistent sizing
  }),
  semanticTokens: defineSemanticTokens({
    ...semanticTokens,
  }),
};

export const cetecPreset = definePreset({
  name: 'cetecPreset',
  theme: {
    extend: {
      tokens: {
        ...theme.tokens,
      },
      semanticTokens: {
        colors: theme.semanticTokens.colors,
      },
      containerSizes: tokens.containerSizes,
      keyframes: tokens.keyframes,
      textStyles: tokens.textStyles,
      breakpoints: tokens.breakpoints,
      recipes: {
        ...transformedRecipes,
      },
      slotRecipes: {
        checkbox: checkboxRecipe,
        radio: radioRecipe,
        tooltip: tooltipRecipe,
        menu: menuRecipe,
      },
    },
  },
  utilities: {
    ...pandaBasePresetUtilities,
  },
  patterns: {
    icon: {
      properties: {
        size: {
          type: 'enum',
          value: Object.keys(tokens.sizes),
        },
      },
      transform(props) {
        const { size, ...rest } = props;
        return {
          width: size,
          height: size,
          ...rest,
        };
      },
    },
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
    html: {
      '--global-font-heading': 'fonts.heading',
      '--global-font-body': 'fonts.body',
      '--global-font-mono': 'fonts.mono',
    },
  },
  conditions: {
    ...pandaBasePresetConditions,
    ...conditions,
  },
  staticCss: {
    css: [
      {
        properties: {
          background: ['*'],
          color: ['*'],
          border: ['*'],
          fill: ['*'],
          boxShadow: ['*'],
          width: ['*'],
          height: ['*'],
          minWidth: ['*'],
          minHeight: ['*'],
          maxWidth: ['*'],
          maxHeight: ['*'],
          padding: ['*'],
          margin: ['*'],
          borderRadius: ['*'],
          textStyle: ['*'],
          fontFamily: ['*'],
          fontSize: ['*'],
          fontWeight: ['*'],
          lineHeight: ['*'],
          letterSpacing: ['*'],
        },
        conditions: ['light', 'dark'],
      },
    ],
  },
});
