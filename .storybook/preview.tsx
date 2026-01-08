import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview, ReactRenderer } from '@storybook/react'
import DocTemplate from '../src/storybook/doctemplate.mdx';
import "../src/styles/index.css";
import "./story-docs-style.css";

const preview: Preview = {
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark'
      },
      defaultTheme: 'light'
    })
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
        order: ['Intro', 'Tokens', ['Overview', 'Colors', 'Typography', 'Sizes', 'Shadows', '*'], 'Components', 'Guides', '*'],
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
