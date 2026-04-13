import { defineConfig } from '@pandacss/dev';

import { cetecPreset } from './src/cetec-preset';
import * as regularRecipes from './src/recipes/recipes-regular';
import * as slotRecipes from './src/recipes/recipes-slot';

import type { RecipeRule } from '@pandacss/types';

// Control whether the staticCss is included or not
// because it's not needed for production and
// generates a ton of CSS
const isStatic = process.env.PANDA_STATIC === 'true';

const recipeNames = [
  ...Object.keys(regularRecipes),
  ...Object.keys(slotRecipes),
].map((key) => key.replace(/Recipe$/, ''));

const recipeOverrides: Record<string, RecipeRule[]> = {
  avatar: [{ size: ['*'], responsive: true }, { shape: ['*'] }],
  badge: [
    {
      size: ['*'],
      responsive: true,
    },
    {
      standalone: ['*'],
      dot: ['*'],
      variant: ['*'],
    },
  ],
  chip: [{ size: ['*'], before: ['*'], after: ['*'], responsive: true }],
  list: [{ density: ['*'] }],
  listItem: [{ density: ['*'], selected: ['*'] }],
  listItemGroup: [{ density: ['*'] }],
};

const staticCssRecipes: Record<string, RecipeRule[]> = Object.fromEntries(
  recipeNames.map((name) => [name, ['*'] as unknown as RecipeRule[]]),
);

const staticCssCss = [
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
];

export default defineConfig({
  eject: true,
  gitignore: true,
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  jsxFactory: 'styled',
  preflight: false, // do not add Panda's default reset styles
  strictTokens: true,

  presets: [cetecPreset],

  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.stories.{js,jsx,mjs,ts,tsx}',
    './src/storybook/**/*.{js,jsx,mjs,ts,tsx,mdx}',
  ],

  exclude: [],

  prefix: 'cetec',
  importMap: '@styled-system',
  outdir: 'src/styled-system',

  staticCss: {
    css: isStatic ? staticCssCss : undefined,
    recipes: {
      ...(isStatic ? staticCssRecipes : {}),
      // below is static CSS we always want
      ...recipeOverrides,
    },
  },
});
