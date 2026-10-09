import { mergeConfig } from 'vite';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    defaultName: 'Documentation',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      base: process.env.STORYBOOK_BASE_PATH ?? '/',
      optimizeDeps: {
        exclude: ['@pandacss/dev'],
      },
    });
  },
};

export default config;
