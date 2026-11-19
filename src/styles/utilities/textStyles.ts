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
  /**
   * Text styles for printed documents. Sizes are in points and colors are
   * paper inks, so they look the same in both app themes and turn solid black
   * under the `thermal` condition.
   */
  print: {
    /** Caps label for field labels and table headers. 7 pt, bold, caps. */
    capsLabel: {
      value: {
        fontFamily: 'body',
        fontVariationSettings: fontVariants.body,
        fontSize: 'print.capsLabel',
        fontWeight: 'bold',
        lineHeight: 'tight',
        letterSpacing: 'widest',
        textTransform: 'uppercase',
        color: 'paper.inkSoft',
      },
    },
    /** Field value, such as the value beside a caps label. 9.5 pt. */
    fieldValue: {
      value: {
        fontFamily: 'body',
        fontVariationSettings: fontVariants.body,
        fontSize: 'print.fieldValue',
        fontWeight: 'medium',
        lineHeight: 'tight',
        color: 'paper.ink',
      },
    },
    /** Body text and table cells. 8.5 pt. */
    body: {
      value: {
        fontFamily: 'body',
        fontVariationSettings: fontVariants.body,
        fontSize: 'print.body',
        fontWeight: 'normal',
        lineHeight: 'tight',
        color: 'paper.ink',
      },
    },
    /** Terms, notes, and other small print. 7.5 pt in soft ink. */
    smallPrint: {
      value: {
        fontFamily: 'body',
        fontVariationSettings: fontVariants.body,
        fontSize: 'print.smallPrint',
        fontWeight: 'normal',
        lineHeight: 'tight',
        color: 'paper.inkSoft',
      },
    },
    /** Document title. 20 pt heading, bold. */
    title: {
      value: {
        fontFamily: 'heading',
        fontSize: 'print.title',
        fontWeight: 'bold',
        lineHeight: 'tight',
        color: 'paper.ink',
      },
    },
    /**
     * Page numbers, such as "Page 2" or "Page 2 of 3". 7.5 pt in soft ink,
     * with tabular figures. The Go print helper writes it into an `@page`
     * margin box from `print-classes.json`, because a margin box cannot carry
     * a class.
     */
    pageFooter: {
      value: {
        fontFamily: 'body',
        fontVariationSettings: fontVariants.body,
        fontSize: 'print.smallPrint',
        fontWeight: 'normal',
        lineHeight: 'tight',
        fontVariantNumeric: 'tabular-nums',
        color: 'paper.inkSoft',
      },
    },
    /** Grand total. 14 pt mono, so digits line up. */
    total: {
      value: {
        fontFamily: 'mono',
        fontVariationSettings: fontVariants.mono,
        fontSize: 'print.total',
        fontWeight: 'bold',
        lineHeight: 'tight',
        color: 'paper.ink',
      },
    },
  },
});
