import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview, ReactRenderer } from '@storybook/react'
import DocTemplate from '../src/storybook/doctemplate.mdx';
import "../src/styles/index.css";

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
    docs: {
      page: DocTemplate,
      toc: {},
    },
  },
  tags: ['autodocs'],
};

export default preview;
