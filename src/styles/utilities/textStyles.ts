import { defineTextStyles } from '@pandacss/dev';

import { fontVariants } from './fontVariants';

export const textStyles = defineTextStyles({
  display: {
    lg: {
      value: {
        fontFamily: 'heading',
        fontWeight: 'black',
        color: 'text',
        fontSize: '72',
      },
    },
    md: {
      value: {
        fontFamily: 'heading',
        fontWeight: 'black',
        color: 'text',
        fontSize: '64',
      },
    },
    sm: {
      value: {
        fontFamily: 'heading',
        fontWeight: 'black',
        color: 'text',
        fontSize: '56',
      },
    },
    xs: {
      value: {
        fontFamily: 'heading',
        fontWeight: 'black',
        color: 'text',
        fontSize: '48',
      },
    },
    size: {
      lg: {
        value: {
          fontFamily: 'heading',
          fontWeight: 'black',
          fontSize: '72',
        },
      },
      md: {
        value: {
          fontFamily: 'heading',
          fontWeight: 'black',
          fontSize: '64',
        },
      },
      sm: {
        value: {
          fontFamily: 'heading',
          fontWeight: 'black',
          fontSize: '56',
        },
      },
      xs: {
        value: {
          fontFamily: 'heading',
          fontWeight: 'black',
          fontSize: '48',
        },
      },
    },
  },
  heading: {
    lg: {
      value: {
        fontFamily: 'heading',
        fontWeight: 'black',
        color: 'text',
        fontSize: '40',
      },
    },
    md: {
      value: {
        fontFamily: 'heading',
        fontWeight: 'black',
        color: 'text',
        fontSize: '32',
      },
    },
    sm: {
      value: {
        fontFamily: 'heading',
        fontWeight: 'black',
        color: 'text',
        fontSize: '24',
      },
    },
    xs: {
      value: {
        fontFamily: 'heading',
        fontWeight: 'black',
        color: 'text',
        fontSize: '20',
      },
    },
    size: {
      lg: {
        value: {
          fontFamily: 'heading',
          fontWeight: 'black',
          fontSize: '40',
        },
      },
      md: {
        value: {
          fontFamily: 'heading',
          fontWeight: 'black',
          fontSize: '32',
        },
      },
      sm: {
        value: {
          fontFamily: 'heading',
          fontWeight: 'black',
          fontSize: '24',
        },
      },
      xs: {
        value: {
          fontFamily: 'heading',
          fontWeight: 'black',
          fontSize: '20',
        },
      },
    },
  },
  body: {
    lg: {
      value: {
        fontFamily: 'body',
        fontVariationSettings: fontVariants.body,
        color: 'text.subtlest',
        fontSize: '20',
      },
    },
    md: {
      value: {
        fontFamily: 'body',
        fontVariationSettings: fontVariants.body,
        color: 'text.subtlest',
        fontSize: '16',
      },
    },
    sm: {
      value: {
        fontFamily: 'body',
        fontVariationSettings: fontVariants.body,
        color: 'text.subtlest',
        fontSize: '14',
      },
    },
    xs: {
      value: {
        fontFamily: 'body',
        fontVariationSettings: fontVariants.body,
        color: 'text.subtlest',
        fontSize: '12',
      },
    },
    size: {
      lg: {
        value: {
          fontFamily: 'body',
          fontVariationSettings: fontVariants.body,
          fontSize: '20',
        },
      },
      md: {
        value: {
          fontFamily: 'body',
          fontVariationSettings: fontVariants.body,
          fontSize: '16',
        },
      },
      sm: {
        value: {
          fontFamily: 'body',
          fontVariationSettings: fontVariants.body,
          fontSize: '14',
        },
      },
      xs: {
        value: {
          fontFamily: 'body',
          fontVariationSettings: fontVariants.body,
          fontSize: '12',
        },
      },
    },
  },
  mono: {
    lg: {
      value: {
        fontFamily: 'mono',
        fontVariationSettings: fontVariants.mono,
        color: 'text.subtlest',
        fontSize: '20',
      },
    },
    md: {
      value: {
        fontFamily: 'mono',
        fontVariationSettings: fontVariants.mono,
        color: 'text.subtlest',
        fontSize: '16',
      },
    },
    sm: {
      value: {
        fontFamily: 'mono',
        fontVariationSettings: fontVariants.mono,
        color: 'text.subtlest',
        fontSize: '14',
      },
    },
    xs: {
      value: {
        fontFamily: 'mono',
        fontVariationSettings: fontVariants.mono,
        color: 'text.subtlest',
        fontSize: '12',
      },
    },
    size: {
      lg: {
        value: {
          fontFamily: 'mono',
          fontVariationSettings: fontVariants.mono,
          fontSize: '20',
        },
      },
      md: {
        value: {
          fontFamily: 'mono',
          fontVariationSettings: fontVariants.mono,
          fontSize: '16',
        },
      },
      sm: {
        value: {
          fontFamily: 'mono',
          fontVariationSettings: fontVariants.mono,
          fontSize: '14',
        },
      },
      xs: {
        value: {
          fontFamily: 'mono',
          fontVariationSettings: fontVariants.mono,
          fontSize: '12',
        },
      },
    },
  },
});
