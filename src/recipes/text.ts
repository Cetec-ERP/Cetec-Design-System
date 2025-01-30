import { defineRecipe } from '@pandacss/dev';

const baseHeadingStyles = {
  fontFamily: 'heading',
  fontWeight: 'bold',
  color: { base: 'slate.90', _dark: 'slate.5' },
};

const baseBodyTextStyles = {
  fontFamily: 'sans',
  fontWeight: 'normal',
  color: { base: 'slate.70', _dark: 'slate.20' },
};

const baseMonoStyles = {
  fontFamily: 'mono',
  fontWeight: 'normal',
  color: { base: 'slate.70', _dark: 'slate.20' },
};

export const textStyles = {
  display: {
    lg: {
      value: {
        ...baseHeadingStyles,
        fontSize: '72',
        // lineHeight: '64',
      },
    },
    md: {
      value: {
        ...baseHeadingStyles,
        fontSize: '64',
        // lineHeight: '64',
      },
    },
    sm: {
      value: {
        ...baseHeadingStyles,
        fontSize: '56',
        // lineHeight: '56',
      },
    },
    xs: {
      value: {
        ...baseHeadingStyles,
        fontSize: '48',
        // lineHeight: '56',
      },
    },
  },
  heading: {
    lg: {
      ...baseHeadingStyles,
      fontSize: '40',
      // lineHeight: '40',
    },
    md: {
      value: {
        ...baseHeadingStyles,
        fontSize: '32',
        // lineHeight: '32',
      },
    },
    sm: {
      value: {
        ...baseHeadingStyles,
        fontSize: '24',
        // lineHeight: '24',
      },
    },
    xs: {
      value: {
        ...baseHeadingStyles,
        fontSize: '20',
        // lineHeight: '24',
      },
    },
  },
  body: {
    lg: {
      value: {
        ...baseBodyTextStyles,
        fontSize: '20',
        // lineHeight: '24',
      },
    },
    md: {
      value: {
        ...baseBodyTextStyles,
        fontSize: '16',
        // lineHeight: '20',
      },
    },
    sm: {
      value: {
        ...baseBodyTextStyles,
        fontSize: '14',
        // lineHeight: '20',
      },
    },
    xs: {
      ...baseBodyTextStyles,
      value: {
        fontSize: '12',
        // lineHeight: '16',
      },
    },
  },
  mono: {
    lg: {
      value: {
        ...baseMonoStyles,
        fontSize: '20',
        // lineHeight: '24',
      },
    },
    md: {
      value: {
        ...baseMonoStyles,
        fontSize: '16',
        // lineHeight: '20',
      },
    },
    sm: {
      value: {
        ...baseMonoStyles,
        fontSize: '14',
        // lineHeight: '20',
      },
    },
    xs: {
      value: {
        ...baseMonoStyles,
        fontSize: '12',
        // lineHeight: '16',
      },
    },
  },
};

export const textRecipe = defineRecipe({
  className: 'text',
  jsx: ['Text'],
  base: {
    margin: '0',
    lineHeight: 'default',
    fontWeight: 'normal',
    color: { base: 'slate.70', _dark: 'slate.20' },
  },
  variants: {
    as: {
      h1: { ...textStyles.heading.lg },
      h2: { ...textStyles.heading.md },
      h3: { ...textStyles.heading.sm },
      h4: { ...textStyles.heading.xs },
    },
    level: {
      12: { fontSize: 12 },
      14: { fontSize: 14 },
      16: { fontSize: 16 },
      20: { fontSize: 20 },
      24: { fontSize: 24 },
      32: { fontSize: 32 },
      40: { fontSize: 40 },
      48: { fontSize: 48 },
      64: { fontSize: 64 },
      72: { fontSize: 72 },
      80: { fontSize: 80 },
      96: { fontSize: 96 },
    },
    font: {
      heading: { fontFamily: 'heading' },
      sans: { fontFamily: 'sans' },
      mono: { fontFamily: 'mono' },
    },
    bold: {
      true: {
        fontWeight: 'bold',
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    underline: {
      true: {
        textDecoration: 'underline',
      },
    },
  },
  defaultVariants: {
    level: 16,
    font: 'sans',
  },
});

// export type TextVariantProps = typeof text.variantProps;
