import { resolve } from 'path';

import { mergeConfig } from 'vite';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/components/*/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    backgroundsStoryGlobals: false,
  },
  docs: {
    defaultName: 'Documentation',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      base: process.env.STORYBOOK_BASE_PATH ?? '/',
      resolve: {
        alias: {
          '~': resolve(__dirname, '../src'),
          '@cetec/styled-system': resolve(__dirname, '../../styled-system'),
        },
      },
      optimizeDeps: {
        exclude: ['@pandacss/dev'],
      },
    });
  },
};

export default config;
