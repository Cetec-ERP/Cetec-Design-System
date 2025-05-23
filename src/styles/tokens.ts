// https://github.com/chakra-ui/panda/tree/4b70f29a14e98d9a0b450273704d2565e3f2d0bd/packages/preset-panda/src

import { defineTextStyles, defineStyles } from '@pandacss/dev';

export const colors = {
  transparent: { value: 'transparent' },
  current: { value: 'currentColor' },
  slate: {
    '0': { value: '#FFFFFF' },
    '1': { value: '#FAFAFA' },
    '2': { value: '#F9F8F6' },
    '3': { value: '#F7F5F3' },
    '4': { value: '#F6F3EF' },
    '5': { value: '#F4F0EB' },
    '10': { value: '#E3E1DE' },
    '20': { value: '#CBCAC8' },
    '30': { value: '#AFADAB' },
    '40': { value: '#939190' },
    '50': { value: '#767675' },
    '60': { value: '#5F5F5E' },
    '70': { value: '#474747' },
    '80': { value: '#2E2E2E' },
    '90': { value: '#1E1E1E' },
    '100': { value: '#000000' },
  },
  gold: {
    '1': { value: '#FFFCF4' },
    '2': { value: '#FFF9E9' },
    '3': { value: '#FEF6DE' },
    '4': { value: '#FEF3D3' },
    '5': { value: '#FEF0C8' },
    '10': { value: '#FFE396' },
    '20': { value: '#FFBE2E' },
    '30': { value: '#E5A000' },
    '40': { value: '#C2850C' },
    '50': { value: '#936F38' },
    '60': { value: '#7A591A' },
    '70': { value: '#5C410A' },
    '80': { value: '#3B2B15' },
    '90': { value: '#1E1100' },
  },
  orange: {
    '5': { value: '#FFF3F2' },
    '10': { value: '#FDE0DB' },
    '20': { value: '#FDB8AE' },
    '30': { value: '#FF8D7B' },
    '40': { value: '#FB5A47' },
    '50': { value: '#E52207' },
    '60': { value: '#B50909' },
    '70': { value: '#8B0A03' },
    '80': { value: '#5C1111' },
    '90': { value: '#200100' },
  },
  tan: {
    '5': { value: '#F5F0E6' },
    '10': { value: '#F1E5CD' },
    '20': { value: '#DEC69A' },
    '30': { value: '#C7A97B' },
    '40': { value: '#AD8B65' },
    '50': { value: '#8E704F' },
    '60': { value: '#6B5947' },
    '70': { value: '#4D4438' },
    '80': { value: '#322D26' },
    '90': { value: '#191714' },
  },
  cyan: {
    '5': { value: '#E7F6F8' },
    '10': { value: '#CCECF2' },
    '20': { value: '#99DEEA' },
    '30': { value: '#5DC0D1' },
    '40': { value: '#449DAC' },
    '50': { value: '#168092' },
    '60': { value: '#2A646D' },
    '70': { value: '#2C4A4E' },
    '80': { value: '#203133' },
    '90': { value: '#111819' },
  },
  blue: {
    '5': { value: '#E8F5FF' },
    '10': { value: '#CFE8FF' },
    '20': { value: '#A1D3FF' },
    '30': { value: '#58B4FF' },
    '40': { value: '#2491FF' },
    '50': { value: '#0076DA' },
    '60': { value: '#005EA2' },
    '70': { value: '#0B4778' },
    '80': { value: '#112F4E' },
    '90': { value: '#11181D' },
  },
  green: {
    '1': { value: '#F8FEF4' },
    '2': { value: '#F1FDE9' },
    '3': { value: '#EBFBDD' },
    '4': { value: '#E4FAD2' },
    '5': { value: '#DDF9C7' },
    '10': { value: '#C5EE93' },
    '20': { value: '#98D035' },
    '30': { value: '#7FB135' },
    '40': { value: '#719F2A' },
    '50': { value: '#538200' },
    '60': { value: '#466C04' },
    '70': { value: '#2F4A0B' },
    '80': { value: '#243413' },
    '90': { value: '#0D1400' },
  },
  yellow: {
    '1': { value: '#FFFDF3' },
    '2': { value: '#FFFBE7' },
    '3': { value: '#FFF9DA' },
    '4': { value: '#FFF7CE' },
    '5': { value: '#FFF5C2' },
    '10': { value: '#FEE685' },
    '20': { value: '#FACE00' },
    '30': { value: '#DDAA01' },
    '40': { value: '#B38C00' },
    '50': { value: '#947100' },
    '60': { value: '#776017' },
    '70': { value: '#5C4809' },
    '80': { value: '#422D19' },
    '90': { value: '#1C0B00' },
  },
  red: {
    '1': { value: '#FFF9FA' },
    '2': { value: '#FFF3F5' },
    '3': { value: '#FFEEF0' },
    '4': { value: '#FFE8EB' },
    '5': { value: '#FFE2E6' },
    '10': { value: '#FFB1B8' },
    '20': { value: '#FF7F8A' },
    '30': { value: '#FF4D5B' },
    '40': { value: '#FE1D2D' },
    '50': { value: '#E50513' },
    '60': { value: '#B3000E' },
    '70': { value: '#810009' },
    '80': { value: '#4F0004' },
    '90': { value: '#200000' },
  },
};

export const fonts = {
  heading: {
    value: "'Ruda Variable', Source Sans, Geneva, Tahoma, Verdana, sans-serif;",
  },
  body: { value: "'Recursive Variable', Geneva, Tahoma, Verdana, sans-serif;" },
  mono: {
    value:
      "'Recursive Variable', Andale Mono, monaco, Consolas, Lucida Console, monospace;",
  },
};

export const fontWeights = {
  light: { value: 300 },
  normal: { value: 400 },
  medium: { value: 500 },
  bold: { value: 700 },
  black: { value: 900 },
};

export const numericSizes = {
  '0': { value: '0' },
  '1': { value: '0.0625rem' },
  '2': { value: '0.125rem' },
  '3': { value: '0.1875rem' },
  '4': { value: '0.25rem' },
  '5': { value: '0.3125rem' },
  '6': { value: '0.375rem' },
  '7': { value: '0.4375rem' },
  '8': { value: '0.5rem' },
  '9': { value: '0.5625rem' },
  '10': { value: '0.625rem' },
  '12': { value: '0.75rem' },
  '14': { value: '0.875rem' },
  '16': { value: '1rem' },
  '20': { value: '1.25rem' },
  '22': { value: '1.375rem' },
  '24': { value: '1.5rem' },
  '32': { value: '2rem' },
  '40': { value: '2.5rem' },
  '48': { value: '3rem' },
  '56': { value: '3.5rem' },
  '64': { value: '4rem' },
  '72': { value: '4.5rem' },
  '80': { value: '5rem' },
  '96': { value: '6rem' },
};

export const sizes = {
  ...numericSizes,
  full: { value: '100%' },
  min: { value: 'min-content' },
  max: { value: 'max-content' },
  fit: { value: 'fit-content' },
  xs: { value: '20rem' }, // 320px
  sm: { value: '24rem' }, // 384px
  md: { value: '28rem' }, // 448px
  lg: { value: '32rem' }, // 512px
  xl: { value: '36rem' }, // 576px
  '2xl': { value: '42rem' }, // 672px
  '3xl': { value: '48rem' }, // 768px
  '4xl': { value: '56rem' }, // 896px
  '5xl': { value: '64rem' }, // 1024px
  '6xl': { value: '72rem' }, // 1152px
  '7xl': { value: '80rem' }, // 1280px
  '8xl': { value: '90rem' }, // 1440px
  prose: { value: '65ch' }, // 1040px
};

export const fontSizes = {
  '12': { value: '0.75rem' },
  '14': { value: '0.875rem' },
  '16': { value: '1rem' },
  '20': { value: '1.25rem' },
  '24': { value: '1.5rem' },
  '32': { value: '2rem' },
  '40': { value: '2.5rem' },
  '48': { value: '3rem' },
  '64': { value: '4rem' },
  '72': { value: '4.5rem' },
  '80': { value: '5rem' },
  '96': { value: '6rem' },
};

export const lineHeights = {
  none: {
    value: '1',
  },
  tight: {
    value: '1em + 0.25rem', // 4
  },
  default: {
    value: '1em + 0.5rem', // 8
  },
  loose: {
    value: '1em + 0.75rem', // 12
  },
};

export const radii = {
  '0': { value: '0' },
  '1': { value: '0.0625rem' },
  '2': { value: '0.125rem' },
  '3': { value: '0.188rem' },
  '4': { value: '0.25rem' },
  '8': { value: '0.5rem' },
  '16': { value: '1rem' },
  '100': { value: '100%' },
};

export const shadows = {
  low: {
    value:
      '0 0 2px {colors.utility.shadowColor}, 0 1px 1px {colors.utility.shadowColor}, 0 2px 3px {colors.utility.shadowColor}',
  },
  medium: {
    value:
      '0 0 2px {colors.utility.shadowColor}, 0 2px 2px {colors.utility.shadowColor}, 0 4px 4px {colors.utility.shadowColor}, 0 8px 8px {colors.utility.shadowColor}',
  },
  high: {
    value:
      '0 0 2px {colors.utility.shadowColor}, 0 2px 4px {colors.utility.shadowColor}, 0 6px 8px 1px {colors.utility.shadowColor}, 0 14px 16px 2px {colors.utility.shadowColor}',
  },
  inset: {
    value:
      'inset 0 0 2px {colors.utility.shadowColor}, inset 0 2px 1px {colors.utility.shadowColor}, inset 0 3px 2px {colors.utility.shadowColor}',
  },
};

export const borders = {
  none: {
    value: 'none',
  },
};

export const aspectRatios = {
  square: {
    value: '1 / 1',
  },
  landscape: {
    value: '4 / 3',
  },
  portrait: {
    value: '3 / 4',
  },
  wide: {
    value: '16 / 9',
  },
  ultrawide: {
    value: '18 / 5',
  },
  golden: {
    value: '1.618 / 1',
  },
};

export const easings = {
  default: {
    value: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  linear: {
    value: 'linear',
  },
  in: {
    value: 'cubic-bezier(0.4, 0, 1, 1)',
  },
  out: {
    value: 'cubic-bezier(0, 0, 0.2, 1)',
  },
  'in-out': {
    value: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const durations = {
  fastest: {
    value: '50ms',
  },
  faster: {
    value: '100ms',
  },
  fast: {
    value: '150ms',
  },
  normal: {
    value: '200ms',
  },
  slow: {
    value: '300ms',
  },
  slower: {
    value: '400ms',
  },
  slowest: {
    value: '500ms',
  },
};

export const letterSpacings = {
  tighter: {
    value: '-0.05em',
  },
  tight: {
    value: '-0.025em',
  },
  normal: {
    value: '0em',
  },
  wide: {
    value: '0.025em',
  },
  wider: {
    value: '0.05em',
  },
  widest: {
    value: '0.1em',
  },
};

export const blurs = {
  sm: {
    value: '{sizes.4}',
  },
  base: {
    value: '{sizes.8}',
  },
  md: {
    value: '{sizes.12}',
  },
  lg: {
    value: '{sizes.16}',
  },
  xl: {
    value: '{sizes.24}',
  },
  '2xl': {
    value: '{sizes.40}',
  },
  '3xl': {
    value: '{sizes.64}',
  },
};

export const animations = {
  spin: {
    value: 'spin 1s linear infinite',
  },
  ping: {
    value: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  },
  pulse: {
    value: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
  bounce: {
    value: 'bounce 1s infinite',
  },
};

export const containerSizes = {
  xs: '320px',
  sm: '384px',
  md: '448px',
  lg: '512px',
  xl: '576px',
  '2xl': '672px',
  '3xl': '768px',
  '4xl': '896px',
  '5xl': '1024px',
  '6xl': '1152px',
  '7xl': '1280px',
  '8xl': '1440px',
};

export const keyframes = {
  spin: {
    to: {
      transform: 'rotate(360deg)',
    },
  },
  ping: {
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: '0',
    },
  },
  pulse: {
    '50%': {
      opacity: '.5',
    },
  },
  bounce: {
    '0%, 100%': {
      transform: 'translateY(-25%)',
      animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
    },
    '50%': {
      transform: 'none',
      animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
    },
  },
};

export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const filters = {
  invert: { value: 'invert(1)' },
  none: { value: 'none' },
};

const baseHeadingStyles = defineStyles({
  value: {
    fontFamily: 'heading',
    fontWeight: 'black',
    color: { base: 'slate.90', _dark: 'slate.5' },
  },
});

const baseBodyTextStyles = defineStyles({
  value: {
    fontFamily: 'body',
  },
});

const baseMonoStyles = defineStyles({
  value: {
    fontFamily: 'mono',
  },
});

export const textStyles = defineTextStyles({
  display: {
    lg: {
      value: {
        ...baseHeadingStyles,
        fontSize: '72',
      },
    },
    md: {
      value: {
        ...baseHeadingStyles,
        fontSize: '64',
      },
    },
    sm: {
      value: {
        ...baseHeadingStyles,
        fontSize: '56',
      },
    },
    xs: {
      value: {
        ...baseHeadingStyles,
        fontSize: '48',
      },
    },
  },
  heading: {
    lg: {
      value: {
        ...baseHeadingStyles,
        fontSize: '40',
      },
    },
    md: {
      value: {
        ...baseHeadingStyles,
        fontSize: '32',
      },
    },
    sm: {
      value: {
        ...baseHeadingStyles,
        fontSize: '24',
      },
    },
    xs: {
      value: {
        ...baseHeadingStyles,
        fontSize: '20',
      },
    },
  },
  body: {
    lg: {
      value: {
        ...baseBodyTextStyles,
        fontSize: '20',
      },
    },
    md: {
      value: {
        ...baseBodyTextStyles,
        fontSize: '16',
      },
    },
    sm: {
      value: {
        ...baseBodyTextStyles,
        fontSize: '14',
      },
    },
    xs: {
      value: {
        ...baseBodyTextStyles,
        fontSize: '12',
      },
    },
  },
  mono: {
    lg: {
      value: {
        ...baseMonoStyles,
        fontSize: '20',
      },
    },
    md: {
      value: {
        ...baseMonoStyles,
        fontSize: '16',
      },
    },
    sm: {
      value: {
        ...baseMonoStyles,
        fontSize: '14',
      },
    },
    xs: {
      value: {
        ...baseMonoStyles,
        fontSize: '12',
      },
    },
  },
});
