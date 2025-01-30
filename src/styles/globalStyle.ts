import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  'html, body': {
    bg: { base: 'slate.0', _dark: 'slate.90' },
    color: { base: 'slate.60', _dark: 'slate.20' },
    fontSize: '16',
    fontWeight: 'normal',
    lineHeight: '1.5',
  },
  'h1, h2, h3, h4, h5, h6': {
    color: { base: 'slate.90', _dark: 'slate.5' },
    fontWeight: 'bold',
    lineHeight: 'calc(1em + 0.5rem)',
  },
  p: {
    marginBottom: '0.5rem',
  },
});
