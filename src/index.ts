import { definePreset } from '@pandacss/dev';
import * as tokens from './styles/tokens';
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
} from './recipes/index';

export const cetecPreset = definePreset({
  name: 'cetec-preset',
  theme: {
    extend: {
      recipes: {
        text: textRecipe,
        heading: headingRecipe,
        link: linkRecipe,
        label: labelRecipe,
        button: buttonRecipe,
        iconButton: iconButtonRecipe,
        input: inputRecipe,
        textarea: textareaRecipe,
        code: codeRecipe,
        pre: preRecipe,
        spinner: spinnerRecipe,
        divider: dividerRecipe,
        box: boxRecipe,
        radio: radioRecipe,
        checkbox: checkBoxRecipe,
      },
      tokens: {
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
        //numericSizes: tokens.numericSizes,
        spacing: tokens.sizes,
        radii: tokens.radii,
      },
    },
  },
});
export default cetecPreset;
