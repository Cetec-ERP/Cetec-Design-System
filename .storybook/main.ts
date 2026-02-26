import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/components/*/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    backgrounds: false,
    backgroundsStoryGlobals: false,
  },
  docs: {
    defaultName: 'Documentation',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      optimizeDeps: {
        exclude: ['@pandacss/dev'],
      },
    });
  },
};

export default config;
