import { defineTextStyles } from '@pandacss/dev';
import { fontVariants } from '.';

export const baseHeadingStyles = {
  fontFamily: 'heading',
  fontWeight: 'black',
  color: 'text',
};

export const baseBodyTextStyles = {
  fontFamily: 'body',
  fontVariationSettings: fontVariants.body,
  color: 'text.subtlest',
};

export const baseMonoStyles = {
  fontFamily: 'mono',
  fontVariationSettings: fontVariants.mono,
  color: 'text.subtlest',
};

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
