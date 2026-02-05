import { defineConfig } from '@pandacss/dev';
import { cetecPreset } from './src/cetec-preset';

// Control whether the staticCss is included or not
// because it's not needed for production and
// generates a ton of CSS
const isStatic = process.env.PANDA_STATIC === 'true';

const staticCss = isStatic
  ? {
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
    }
  : { staticCss: { css: [] } };

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
    './src/components/*/*.stories.@(js|jsx|ts|tsx)',
    './src/storybook/**/*.{js,jsx,ts,tsx,mdx}',
  ],

  exclude: [],

  prefix: 'cetec',
  importMap: '@styled-system',
  outdir: 'src/styled-system',

  ...staticCss,
});
