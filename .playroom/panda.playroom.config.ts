import { defineConfig } from '@pandacss/dev';

import { cetecPreset } from '../src/cetec-preset';
import * as regularRecipes from '../src/recipes/recipes-regular';
import * as slotRecipes from '../src/recipes/recipes-slot';

import type { RecipeRule } from '@pandacss/types';

const recipeNames = [
  ...Object.keys(regularRecipes),
  ...Object.keys(slotRecipes),
].map((key) => key.replace(/Recipe$/, ''));

const recipeOverrides: Record<string, RecipeRule[]> = {
  avatar: [{ size: ['*'], responsive: true }, { shape: ['*'] }],
  badge: [{ size: ['*'], responsive: true }],
  chip: [{ size: ['*'], responsive: true }],
  list: [{ density: ['*'] }],
  listItem: [{ density: ['*'], selected: ['*'] }],
  listItemGroup: [{ density: ['*'] }],
};

const staticCssRecipes: Record<string, RecipeRule[]> = Object.fromEntries(
  recipeNames.map((name) => [name, ['*'] as unknown as RecipeRule[]]),
);

export default defineConfig({
  eject: true,
  gitignore: true,
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  jsxFactory: 'styled',
  preflight: false, // do not add Panda's default reset styles
  strictTokens: true,
  watch: true,

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
    css: [
      {
        properties: {
          background: ['*'],
          backgroundColor: ['*'],
          color: ['*'],
          fill: ['*'],
          stroke: ['*'],
          border: ['*'],
          borderColor: ['*'],
          borderRadius: ['*'],
          borderWidth: ['*'],
          boxShadow: ['*'],
          display: ['*'],
          position: ['*'],
          flex: ['*'],
          flexDirection: ['*'],
          flexWrap: ['*'],
          alignItems: ['*'],
          alignContent: ['*'],
          alignSelf: ['*'],
          justifyItems: ['*'],
          justifyContent: ['*'],
          justifySelf: ['*'],
          gap: ['*'],
          rowGap: ['*'],
          columnGap: ['*'],
          zIndex: ['*'],
          width: ['*'],
          minWidth: ['*'],
          maxWidth: ['*'],
          height: ['*'],
          minHeight: ['*'],
          maxHeight: ['*'],
          margin: ['*'],
          marginTop: ['*'],
          marginRight: ['*'],
          marginBottom: ['*'],
          marginLeft: ['*'],
          padding: ['*'],
          paddingTop: ['*'],
          paddingRight: ['*'],
          paddingBottom: ['*'],
          paddingLeft: ['*'],
          fontFamily: ['*'],
          fontSize: ['*'],
          fontWeight: ['*'],
          lineHeight: ['*'],
          letterSpacing: ['*'],
          textStyle: ['*'],
        },
        conditions: ['light', 'dark'],
        responsive: true,
      },
    ],
    recipes: {
      ...staticCssRecipes,
      ...recipeOverrides,
    },
  },

  hooks: {
    'preset:resolved': ({ utils, preset, name }) => {
      if (name === 'cetecPreset') {
        return utils.omit(preset, ['patterns.box', 'patterns.divider']);
      }
      return preset;
    },
  },
});
