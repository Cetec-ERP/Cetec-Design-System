import { definePreset } from '@pandacss/dev';
import { theme } from '../panda.config';
import * as tokens from './styles/tokens';

export const cetecPreset = definePreset({
  name: 'cetec-preset',
  theme: {
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
      //numericSizes: theme.tokens.numericSizes,
      spacing: theme.tokens.sizes,
      radii: theme.tokens.radii,
    },
    extend: {
      breakpoints: theme.tokens.breakpoints,
      textStyles: tokens.textStyles,
    },
  },
});

export * from './components/Text';
