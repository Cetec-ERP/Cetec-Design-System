import { defineGlobalStyles } from '@pandacss/dev';

// includes some normalize styles from:
// https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css

export const globalCss = defineGlobalStyles({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    _disabled: {
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },
  html: {
    '--global-font-heading': 'var(--cetec-fonts-heading)',
    '--global-font-body': 'var(--cetec-fonts-body)',
    '--global-font-mono': 'var(--cetec-fonts-mono)',
    '--cetec-font-variant-body': '"MONO" 0, "CRSV" 0, "CASL" 0, "slnt" 0',
    '--cetec-font-variant-body-italic':
      '"MONO" 0, "CRSV" 1, "CASL" 0, "slnt" -15',
    '--cetec-font-variant-body-casual':
      '"MONO" 0, "CRSV" 1, "CASL" 1, "slnt" 0',
    '--cetec-font-variant-body-casual-italic':
      '"MONO" 0, "CRSV" 1, "CASL" 1, "slnt" -15',
    '--cetec-font-variant-mono': '"MONO" 1, "CRSV" 0, "CASL" 0, "slnt" 0',
    '--cetec-font-variant-mono-italic':
      '"MONO" 1, "CRSV" 1, "CASL" 0, "slnt" -15',
    '--cetec-font-variant-mono-casual':
      '"MONO" 1, "CRSV" 1, "CASL" 1, "slnt" 0',
    '--cetec-font-variant-mono-casual-italic':
      '"MONO" 1, "CRSV" 1, "CASL" 1, "slnt" -15',
    fontSize: '16',
    lineHeight: 'var(--cetec-line-heights-default)',
    '-webkit-text-size-adjust': '100%',
    tabSize: '4',
  },
});
