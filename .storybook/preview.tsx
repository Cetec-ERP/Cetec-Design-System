import { withThemeByClassName } from '@storybook/addon-themes';

import { IconProvider } from '../src/components/Icon';
import DocTemplate from '../src/storybook/doctemplate.mdx';

import type { Preview, ReactRenderer } from '@storybook/react';
import '../src/styles/index.css';
import './story-docs-style.css';

const preview: Preview = {
  decorators: [
    (Story) => {
      const pathname =
        typeof window === 'undefined' ? '/' : window.location.pathname;
      const basePath = pathname.endsWith('.html')
        ? pathname.slice(0, pathname.lastIndexOf('/') + 1)
        : pathname;
      const normalizedPath = basePath.endsWith('/') ? basePath : `${basePath}/`;
      const spritePath = `${normalizedPath}sprite.svg`;

      return (
        <IconProvider spritePath={spritePath}>
          <Story />
        </IconProvider>
      );
    },
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'body',
    }),
  ],
  initialGlobals: {},
  parameters: {
    backgrounds: { disable: true },
    controls: {
      disableSaveFromUI: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Intro',
          'Tokens',
          ['Overview', 'Colors', 'Typography', 'Sizes', 'Shadows', '*'],
          'Components',
          'Docs',
          '*',
        ],
      },
    },
    docs: {
      page: DocTemplate,
      toc: {
        headingSelector: 'h2, h3, h4',
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
