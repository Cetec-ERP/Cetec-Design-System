import { defineConfig } from '@pandacss/dev';
import { cetecPreset } from './cetec-preset';

// Control whether the staticCss is included or not
// because it's not needed for production and
// generates a ton of CSS
const isStatic = process.env.PANDA_STATIC === 'true';

const staticCss = isStatic
  ? {
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
    }
  : { css: [] };

export default defineConfig({
  eject: true,
  gitignore: true,
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  jsxFactory: 'styled',
  preflight: false, // do not add Panda's default reset styles
  strictTokens: true,
  watch: true,
  clean: true, // empty /styled-system each run

  presets: [cetecPreset],

  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/components/*/*.stories.@(js|jsx|mjs|ts|tsx)',
    './src/storybook/**/*.{js,jsx,mjs,ts,tsx,mdx}',
  ],

  exclude: [],

  prefix: 'cetec',
  importMap: '@styled-system',
  outdir: 'styled-system',

  staticCss: {
    css: staticCss.css,
  },
});
