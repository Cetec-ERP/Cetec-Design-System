import { defineConfig } from '@pandacss/dev';

import { printPreset } from './src/print/printPreset';
import { printRecipeNames } from './src/print/printRecipes';

import type { RecipeRule } from '@pandacss/types';

// Builds the CSS part of dist/print.css. `tools/build-print.mjs` runs it with
// `panda cssgen` and adds the fonts. Nothing is extracted from source files.
// Every print recipe ships with all of its variants through staticCss.
export default defineConfig({
  eject: true,
  jsxFramework: 'react',
  preflight: false,
  strictTokens: true,

  presets: [printPreset],

  include: [],
  exclude: [],

  prefix: 'cetec',
  outdir: 'node_modules/.cache/cetec-print/styled-system',

  staticCss: {
    recipes: Object.fromEntries(
      printRecipeNames.map((name) => [name, ['*'] as unknown as RecipeRule[]]),
    ),
  },
});
