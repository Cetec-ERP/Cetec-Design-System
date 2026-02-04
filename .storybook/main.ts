import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/components/*/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
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
    const base = process.env.GH_REPO ? `/${process.env.GH_REPO}/` : '/';
    config.base = base;
    return config;
  },
  env: () => ({
    BASE_PATH: process.env.GH_REPO ? `/${process.env.GH_REPO}/` : '/',
  }),
};

export default config;
