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
import {
  buttonRecipe,
  iconButtonRecipe,
  inputRecipe,
  textareaRecipe,
  headingRecipe,
  linkRecipe,
  labelRecipe,
  textRecipe,
  checkBoxRecipe,
  spinnerRecipe,
  dividerRecipe,
  preRecipe,
  codeRecipe,
  boxRecipe,
  radioRecipe,
  textinputRecipe,
  cardRecipe,
  toggleRecipe,
  toggleInputRecipe,
  radioInputRecipe,
} from './src/recipes/index';

// https://panda-css.com/docs/concepts/extend#removing-something-from-the-base-presets
// omit default patterns here
const { box, divider, ...pandaBasePresetPatterns } = pandaBasePreset.patterns;
const pandaBasePresetConditions = pandaBasePreset.conditions;
const pandaBasePresetUtilities = pandaBasePreset.utilities;
const pandaBasePresetGlobalCss = pandaBasePreset.globalCss;

const theme = {
  tokens: defineTokens({
    aspectRatios: tokens.aspectRatios,
    borders: tokens.borders,
    shadows: tokens.shadows,
    easings: tokens.easings,
    durations: tokens.durations,
    letterSpacings: tokens.letterSpacings,
    lineHeights: tokens.lineHeights,
    blurs: tokens.blurs,
    animations: tokens.animations,
    colors: tokens.colors,
    fonts: tokens.fonts,
    fontSizes: tokens.fontSizes,
    fontWeights: tokens.fontWeights,
    sizes: tokens.sizes,
    numericSizes: tokens.numericSizes,
    spacing: tokens.sizes,
    radii: tokens.radii,
    keyframes: tokens.keyframes,
    containerSizes: tokens.containerSizes,
    breakpoints: tokens.breakpoints,
  }),
  semanticTokens: defineSemanticTokens({
    colors: semanticTokens.colors,
  }),
};

export default definePreset({
  theme: {
    extend: {
      containerSizes: tokens.containerSizes,
      keyframes: tokens.keyframes,
      tokens: {
        aspectRatios: theme.tokens.aspectRatios,
        borders: theme.tokens.borders,
        shadows: theme.tokens.shadows,
        easings: theme.tokens.easings,
        durations: theme.tokens.durations,
        letterSpacings: theme.tokens.letterSpacings,
        lineHeights: theme.tokens.lineHeights,
        blurs: theme.tokens.blurs,
        animations: theme.tokens.animations,
        colors: theme.tokens.colors,
        fonts: theme.tokens.fonts,
        fontSizes: theme.tokens.fontSizes,
        fontWeights: theme.tokens.fontWeights,
        sizes: theme.tokens.sizes,
        numericSizes: theme.tokens.numericSizes,
        spacing: theme.tokens.sizes,
        radii: theme.tokens.radii,
        breakpoints: theme.tokens.breakpoints,
        textStyles: tokens.textStyles,
      },
      semanticTokens: {
        colors: theme.semanticTokens.colors,
      },
      recipes: {
        text: textRecipe,
        heading: headingRecipe,
        link: linkRecipe,
        label: labelRecipe,
        button: buttonRecipe,
        iconButton: iconButtonRecipe,
        input: inputRecipe,
        textinput: textinputRecipe,
        textarea: textareaRecipe,
        code: codeRecipe,
        pre: preRecipe,
        spinner: spinnerRecipe,
        divider: dividerRecipe,
        box: boxRecipe,
        radioInput: radioInputRecipe,
        toggle: toggleRecipe,
        toggleInput: toggleInputRecipe,
        card: cardRecipe,
      },
      slotRecipes: {
        checkbox: checkBoxRecipe,
        radio: radioRecipe,
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
              px: { base: '24', md: '20', sm: '16' },
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
    indeterminate:
      '&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])',
    hidden: '&:is([hidden])',
    current: '&:is([data-current])',
    today: '&:is([data-today])',
    collapsed:
      '&:is([aria-collapsed=true], [data-collapsed], [data-state="collapsed"])',
    containerSmall: '@container (max-width: 560px)',
    containerMedium: '@container (min-width: 561px) and (max-width: 999px)',
    containerLarge: '@container (min-width: 1000px)',
  },
});
