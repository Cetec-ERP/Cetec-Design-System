import { defineSemanticTokens } from '@pandacss/dev';

export const colors = defineSemanticTokens.colors({
  bg: {
    disabled: {
      value: { base: '{colors.neutral.10}', _dark: '{colors.darkNeutral.10}' },
    },
    neutral: {
      DEFAULT: {
        value: {
          base: '{colors.neutralA.20}',
          _dark: '{colors.darkNeutralA.20}',
        },
      },
      hovered: {
        value: {
          base: '{colors.neutralA.30}',
          _dark: '{colors.darkNeutralA.30}',
        },
      },
      pressed: {
        value: {
          base: '{colors.neutralA.40}',
          _dark: '{colors.darkNeutralA.40}',
        },
      },
      bold: {
        DEFAULT: {
          value: {
            base: '{colors.neutral.80}',
            _dark: '{colors.darkNeutral.80}',
          },
        },
        hovered: {
          value: {
            base: '{colors.neutral.90}',
            _dark: '{colors.darkNeutral.90}',
          },
        },
        pressed: {
          value: {
            base: '{colors.neutral.100}',
            _dark: '{colors.darkNeutral.100}',
          },
        },
      },
      boldest: {
        DEFAULT: {
          value: {
            base: '{colors.neutral.100}',
            _dark: '{colors.darkNeutral.110}',
          },
        },
      },
      subtle: {
        DEFAULT: { value: { base: '#ffffff02', _dark: '#ffffff02' } },
        hovered: {
          value: {
            base: '{colors.neutralA.20}',
            _dark: '{colors.darkNeutralA.20}',
          },
        },
        pressed: {
          value: {
            base: '{colors.neutralA.30}',
            _dark: '{colors.darkNeutralA.30}',
          },
        },
      },
      inverse: {
        DEFAULT: {
          value: {
            base: '{colors.darkNeutral.0}',
            _dark: '{colors.neutral.0}',
          },
        },
        subtle: {
          DEFAULT: { value: { base: '#00000029', _dark: '#ffffff29' } },
          hovered: { value: { base: '#0000003d', _dark: '#ffffff3d' } },
        },
      },
    },
    success: {
      DEFAULT: {
        value: { base: '{colors.green.10}', _dark: '{colors.green.70}' },
      },
      hovered: {
        value: { base: '{colors.green.20}', _dark: '{colors.green.80}' },
      },
      pressed: {
        value: { base: '{colors.green.30}', _dark: '{colors.green.90}' },
      },
      bold: {
        DEFAULT: {
          value: { base: '{colors.green.50}', _dark: '{colors.green.40}' },
        },
        hovered: {
          value: { base: '{colors.green.60}', _dark: '{colors.green.30}' },
        },
        pressed: {
          value: { base: '{colors.green.70}', _dark: '{colors.green.20}' },
        },
      },
    },
    warning: {
      DEFAULT: {
        value: { base: '{colors.orange.10}', _dark: '{colors.orange.70}' },
      },
      hovered: {
        value: { base: '{colors.orange.20}', _dark: '{colors.orange.80}' },
      },
      pressed: {
        value: { base: '{colors.orange.30}', _dark: '{colors.orange.90}' },
      },
      bold: {
        DEFAULT: {
          value: { base: '{colors.orange.50}', _dark: '{colors.orange.30}' },
        },
        hovered: {
          value: { base: '{colors.orange.60}', _dark: '{colors.orange.40}' },
        },
        pressed: {
          value: { base: '{colors.orange.70}', _dark: '{colors.orange.50}' },
        },
      },
    },
    danger: {
      DEFAULT: {
        value: { base: '{colors.red.10}', _dark: '{colors.red.70}' },
      },
      hovered: { value: { base: '{colors.red.20}', _dark: '{colors.red.80}' } },
      pressed: { value: { base: '{colors.red.30}', _dark: '{colors.red.90}' } },
      bold: {
        DEFAULT: {
          value: { base: '{colors.red.50}', _dark: '{colors.red.40}' },
        },
        hovered: {
          value: { base: '{colors.red.40}', _dark: '{colors.red.30}' },
        },
        pressed: {
          value: { base: '{colors.red.60}', _dark: '{colors.red.50}' },
        },
      },
    },
    info: {
      DEFAULT: {
        value: { base: '{colors.blue.10}', _dark: '{colors.blue.70}' },
      },
      hovered: {
        value: { base: '{colors.blue.20}', _dark: '{colors.blue.80}' },
      },
      pressed: {
        value: { base: '{colors.blue.30}', _dark: '{colors.blue.90}' },
      },
      bold: {
        DEFAULT: {
          value: { base: '{colors.blue.50}', _dark: '{colors.blue.40}' },
        },
        hovered: {
          value: { base: '{colors.blue.60}', _dark: '{colors.blue.30}' },
        },
        pressed: {
          value: { base: '{colors.blue.70}', _dark: '{colors.blue.20}' },
        },
      },
    },
    cta: {
      DEFAULT: {
        value: { base: '{colors.gold.10}', _dark: '{colors.gold.70}' },
      },
      hovered: {
        value: { base: '{colors.gold.20}', _dark: '{colors.gold.80}' },
      },
      pressed: {
        value: { base: '{colors.gold.30}', _dark: '{colors.gold.90}' },
      },
      bold: {
        DEFAULT: {
          value: { base: '{colors.gold.20}', _dark: '{colors.gold.30}' },
        },
        hovered: {
          value: { base: '{colors.gold.30}', _dark: '{colors.gold.20}' },
        },
        pressed: {
          value: { base: '{colors.gold.40}', _dark: '{colors.gold.40}' },
        },
      },
    },
    input: {
      DEFAULT: {
        value: { base: '{colors.neutral.0}', _dark: '{colors.darkNeutral.20}' },
      },
      hovered: {
        value: {
          base: '{colors.neutral.10}',
          _dark: '{colors.darkNeutral.25}',
        },
      },
      pressed: {
        value: { base: '{colors.neutral.0}', _dark: '{colors.darkNeutral.20}' },
      },
    },
    accent: {
      // hue: {
      // subtle: { DEFAULT: {}, hovered: {}, pressed: {}, },
      // subtler: { DEFAULT: {}, hovered: {}, pressed: {}, },
      // subtlest: { DEFAULT: {}, hovered: {}, pressed: {}, },
      // bold: { DEFAULT: {}, hovered: {}, pressed: {}, }
      // },
      neutral: {
        DEFAULT: {
          value: {
            base: '{colors.neutral.50}',
            _dark: '{colors.darkNeutral.50}',
          },
        },
        subtle: {
          value: {
            base: '{colors.neutral.30}',
            _dark: '{colors.darkNeutral.40}',
          },
        },
        subtlest: {
          value: {
            base: '{colors.neutral.10}',
            _dark: '{colors.darkNeutral.10}',
          },
        },
        bold: {
          value: {
            base: '{colors.neutral.70}',
            _dark: '{colors.darkNeutral.70}',
          },
        },
      },
      gold: {
        DEFAULT: {
          value: { base: '{colors.gold.30}', _dark: '{colors.gold.70}' },
        },
        subtle: {
          value: { base: '{colors.gold.20}', _dark: '{colors.gold.80}' },
        },
        subtlest: {
          value: { base: '{colors.gold.10}', _dark: '{colors.gold.90}' },
        },
        bold: {
          value: { base: '{colors.gold.70}', _dark: '{colors.gold.40}' },
        },
      },
      blue: {
        DEFAULT: {
          value: { base: '{colors.blue.40}', _dark: '{colors.blue.70}' },
        },
        subtle: {
          value: { base: '{colors.blue.20}', _dark: '{colors.blue.80}' },
        },
        subtlest: {
          value: { base: '{colors.blue.10}', _dark: '{colors.blue.90}' },
        },
        bold: {
          value: { base: '{colors.blue.70}', _dark: '{colors.blue.40}' },
        },
      },
      green: {
        DEFAULT: {
          value: { base: '{colors.green.40}', _dark: '{colors.green.70}' },
        },
        subtle: {
          value: { base: '{colors.green.20}', _dark: '{colors.green.80}' },
        },
        subtlest: {
          value: { base: '{colors.green.10}', _dark: '{colors.green.90}' },
        },
        bold: {
          value: { base: '{colors.green.70}', _dark: '{colors.green.40}' },
        },
      },
      yellow: {
        DEFAULT: {
          value: { base: '{colors.yellow.30}', _dark: '{colors.yellow.70}' },
        },
        subtle: {
          value: { base: '{colors.yellow.20}', _dark: '{colors.yellow.80}' },
        },
        subtlest: {
          value: { base: '{colors.yellow.10}', _dark: '{colors.yellow.90}' },
        },
        bold: {
          value: { base: '{colors.yellow.70}', _dark: '{colors.yellow.40}' },
        },
      },
      red: {
        DEFAULT: {
          value: { base: '{colors.red.40}', _dark: '{colors.red.70}' },
        },
        subtle: {
          value: { base: '{colors.red.20}', _dark: '{colors.red.80}' },
        },
        subtlest: {
          value: { base: '{colors.red.10}', _dark: '{colors.red.90}' },
        },
        bold: {
          value: { base: '{colors.red.70}', _dark: '{colors.red.40}' },
        },
      },
      tomato: {
        DEFAULT: {
          value: { base: '{colors.tomato.40}', _dark: '{colors.tomato.70}' },
        },
        subtle: {
          value: { base: '{colors.tomato.20}', _dark: '{colors.tomato.80}' },
        },
        subtlest: {
          value: { base: '{colors.tomato.10}', _dark: '{colors.tomato.90}' },
        },
        bold: {
          value: { base: '{colors.tomato.70}', _dark: '{colors.tomato.40}' },
        },
      },
      tan: {
        DEFAULT: {
          value: { base: '{colors.tan.40}', _dark: '{colors.tan.70}' },
        },
        subtle: {
          value: { base: '{colors.tan.20}', _dark: '{colors.tan.80}' },
        },
        subtlest: {
          value: { base: '{colors.tan.10}', _dark: '{colors.tan.90}' },
        },
        bold: {
          value: { base: '{colors.tan.70}', _dark: '{colors.tan.40}' },
        },
      },
      orange: {
        DEFAULT: {
          value: { base: '{colors.orange.40}', _dark: '{colors.orange.70}' },
        },
        subtle: {
          value: { base: '{colors.orange.20}', _dark: '{colors.orange.80}' },
        },
        subtlest: {
          value: { base: '{colors.orange.10}', _dark: '{colors.orange.90}' },
        },
        bold: {
          value: { base: '{colors.orange.70}', _dark: '{colors.orange.40}' },
        },
      },
      pear: {
        DEFAULT: {
          value: { base: '{colors.pear.40}', _dark: '{colors.pear.70}' },
        },
        subtle: {
          value: { base: '{colors.pear.20}', _dark: '{colors.pear.80}' },
        },
        subtlest: {
          value: { base: '{colors.pear.10}', _dark: '{colors.pear.90}' },
        },
        bold: {
          value: { base: '{colors.pear.70}', _dark: '{colors.pear.40}' },
        },
      },
      grass: {
        DEFAULT: {
          value: { base: '{colors.grass.40}', _dark: '{colors.grass.70}' },
        },
        subtle: {
          value: { base: '{colors.grass.20}', _dark: '{colors.grass.80}' },
        },
        subtlest: {
          value: { base: '{colors.grass.10}', _dark: '{colors.grass.90}' },
        },
        bold: {
          value: { base: '{colors.grass.70}', _dark: '{colors.grass.40}' },
        },
      },
      mint: {
        DEFAULT: {
          value: { base: '{colors.mint.40}', _dark: '{colors.mint.70}' },
        },
        subtle: {
          value: { base: '{colors.mint.20}', _dark: '{colors.mint.80}' },
        },
        subtlest: {
          value: { base: '{colors.mint.10}', _dark: '{colors.mint.90}' },
        },
        bold: {
          value: { base: '{colors.mint.70}', _dark: '{colors.mint.40}' },
        },
      },
      cyan: {
        DEFAULT: {
          value: { base: '{colors.cyan.40}', _dark: '{colors.cyan.70}' },
        },
        subtle: {
          value: { base: '{colors.cyan.20}', _dark: '{colors.cyan.80}' },
        },
        subtlest: {
          value: { base: '{colors.cyan.10}', _dark: '{colors.cyan.90}' },
        },
        bold: {
          value: { base: '{colors.cyan.70}', _dark: '{colors.cyan.40}' },
        },
      },
      indigo: {
        DEFAULT: {
          value: { base: '{colors.indigo.40}', _dark: '{colors.indigo.70}' },
        },
        subtle: {
          value: { base: '{colors.indigo.20}', _dark: '{colors.indigo.80}' },
        },
        subtlest: {
          value: { base: '{colors.indigo.10}', _dark: '{colors.indigo.90}' },
        },
        bold: {
          value: { base: '{colors.indigo.70}', _dark: '{colors.indigo.40}' },
        },
      },
      purple: {
        DEFAULT: {
          value: { base: '{colors.purple.40}', _dark: '{colors.purple.70}' },
        },
        subtle: {
          value: { base: '{colors.purple.20}', _dark: '{colors.purple.80}' },
        },
        subtlest: {
          value: { base: '{colors.purple.10}', _dark: '{colors.purple.90}' },
        },
        bold: {
          value: { base: '{colors.purple.70}', _dark: '{colors.purple.40}' },
        },
      },
      violet: {
        DEFAULT: {
          value: { base: '{colors.violet.40}', _dark: '{colors.violet.70}' },
        },
        subtle: {
          value: { base: '{colors.violet.20}', _dark: '{colors.violet.80}' },
        },
        subtlest: {
          value: { base: '{colors.violet.10}', _dark: '{colors.violet.90}' },
        },
        bold: {
          value: { base: '{colors.violet.70}', _dark: '{colors.violet.40}' },
        },
      },
      pink: {
        DEFAULT: {
          value: { base: '{colors.pink.40}', _dark: '{colors.pink.70}' },
        },
        subtle: {
          value: { base: '{colors.pink.20}', _dark: '{colors.pink.80}' },
        },
        subtlest: {
          value: { base: '{colors.pink.10}', _dark: '{colors.pink.90}' },
        },
        bold: {
          value: { base: '{colors.pink.70}', _dark: '{colors.pink.40}' },
        },
      },
      rose: {
        DEFAULT: {
          value: { base: '{colors.rose.40}', _dark: '{colors.rose.70}' },
        },
        subtle: {
          value: { base: '{colors.rose.20}', _dark: '{colors.rose.80}' },
        },
        subtlest: {
          value: { base: '{colors.rose.10}', _dark: '{colors.rose.90}' },
        },
        bold: {
          value: { base: '{colors.rose.70}', _dark: '{colors.rose.40}' },
        },
      },
      magenta: {
        DEFAULT: {
          value: { base: '{colors.magenta.40}', _dark: '{colors.magenta.70}' },
        },
        subtle: {
          value: { base: '{colors.magenta.20}', _dark: '{colors.magenta.80}' },
        },
        subtlest: {
          value: { base: '{colors.magenta.10}', _dark: '{colors.magenta.90}' },
        },
        bold: {
          value: { base: '{colors.magenta.70}', _dark: '{colors.magenta.40}' },
        },
      },
    },
  },
  blanket: {
    DEFAULT: { value: { base: '#17171775', _dark: '#10121499' } },
    danger: { value: { base: '#ef5c4814', _dark: '#e3493514' } },
  },
  border: {
    DEFAULT: {
      value: {
        base: '{colors.neutralA.30}',
        _dark: '{colors.darkNeutralA.30}',
      },
    },
    bold: {
      value: { base: '{colors.neutral.60}', _dark: '{colors.darkNeutral.60}' },
    },
    boldest: {
      value: { base: '{colors.neutral.80}', _dark: '{colors.darkNeutral.80}' },
    },
    inverse: {
      value: { base: '{colors.neutral.0}', _dark: '{colors.darkNeutral.0}' },
    },
    disabled: {
      value: {
        base: '{colors.neutralA.20}',
        _dark: '{colors.darkNeutralA.20}',
      },
    },
    focused: {
      DEFAULT: {
        value: {
          base: '{colors.neutral.90}',
          _dark: '{colors.darkNeutral.100}',
        },
      },
      inverse: {
        value: {
          base: '{colors.darkNeutral.100}',
          _dark: '{colors.neutral.90}',
        },
      },
    },
    input: {
      value: { base: '{colors.neutral.50}', _dark: '{colors.darkNeutral.60}' },
    },
    success: {
      value: { base: '{colors.green.60}', _dark: '{colors.green.50}' },
    },
    warning: {
      value: { base: '{colors.orange.60}', _dark: '{colors.orange.50}' },
    },
    danger: { value: { base: '{colors.red.60}', _dark: '{colors.red.50}' } },
    info: { value: { base: '{colors.blue.60}', _dark: '{colors.blue.50}' } },
  },
  icon: {
    DEFAULT: {
      value: {
        base: '{colors.neutral.100}',
        _dark: '{colors.darkNeutral.110}',
      },
    },
    subtle: {
      value: { base: '{colors.neutral.80}', _dark: '{colors.darkNeutral.80}' },
    },
    subtlest: {
      value: { base: '{colors.neutral.70}', _dark: '{colors.darkNeutral.70}' },
    },
    inverse: {
      value: { base: '{colors.neutral.0}', _dark: '{colors.darkNeutral.10}' },
    },
    disabled: {
      value: {
        base: '{colors.neutralA.40}',
        _dark: '{colors.darkNeutralA.40}',
      },
    },
    decorative: {
      DEFAULT: {
        value: {
          base: '{colors.neutral.50}',
          _dark: '{colors.darkNeutral.60}',
        },
      },
      hovered: {
        value: { base: '{colors.neutral.100}', _dark: '{colors.neutral.0}' },
      },
      inverse: {
        DEFAULT: {
          value: {
            base: '{colors.neutral.30}',
            _dark: '{colors.darkNeutral.30}',
          },
        },
        hovered: {
          value: {
            base: '{colors.neutral.0}',
            _dark: '{colors.darkNeutral.10}',
          },
        },
      },
    },
    success: {
      value: { base: '{colors.green.60}', _dark: '{colors.green.50}' },
    },
    warning: {
      DEFAULT: {
        value: { base: '{colors.orange.60}', _dark: '{colors.orange.30}' },
      },
      inverse: {
        value: {
          base: '{colors.neutral.100}',
          _dark: '{colors.darkNeutral.10}',
        },
      },
    },
    danger: {
      DEFAULT: { value: { base: '{colors.red.70}', _dark: '{colors.red.50}' } },
      inverse: { value: { base: '{colors.red.10}', _dark: '{colors.red.70}' } },
    },
    cta: {
      DEFAULT: {
        value: { base: '{colors.gold.50}', _dark: '{colors.gold.60}' },
      },
      hovered: {
        value: { base: '{colors.gold.80}', _dark: '{colors.gold.90}' },
      },
    },
    info: { value: { base: '{colors.blue.60}', _dark: '{colors.blue.50}' } },
  },
  link: {
    DEFAULT: { value: { base: '{colors.blue.70}', _dark: '{colors.blue.40}' } },
    pressed: { value: { base: '{colors.blue.80}', _dark: '{colors.blue.30}' } },
  },
  surface: {
    DEFAULT: {
      value: { base: '{colors.neutral.0}', _dark: '{colors.darkNeutral.10}' },
    },
    hovered: {
      value: { base: '{colors.neutral.20}', _dark: '{colors.darkNeutral.20}' },
    },
    pressed: {
      value: { base: '{colors.neutral.30}', _dark: '{colors.darkNeutral.30}' },
    },
    sunken: {
      value: { base: '{colors.neutral.10}', _dark: '{colors.darkNeutral.0}' },
    },
    overlay: {
      DEFAULT: {
        value: { base: '{colors.neutral.0}', _dark: '{colors.darkNeutral.25}' },
      },
      hovered: {
        value: {
          base: '{colors.neutral.20}',
          _dark: '{colors.darkNeutral.30}',
        },
      },
      pressed: {
        value: {
          base: '{colors.neutral.30}',
          _dark: '{colors.darkNeutral.35}',
        },
      },
    },
    raised: {
      DEFAULT: {
        value: { base: '{colors.neutral.0}', _dark: '{colors.darkNeutral.0}' },
      },
      hovered: {
        value: {
          base: '{colors.neutral.20}',
          _dark: '{colors.darkNeutral.25}',
        },
      },
      pressed: {
        value: {
          base: '{colors.neutral.30}',
          _dark: '{colors.darkNeutral.30}',
        },
      },
    },
  },
  text: {
    DEFAULT: {
      value: {
        base: '{colors.neutral.100}',
        _dark: '{colors.darkNeutral.100}',
      },
    },
    subtle: {
      value: { base: '{colors.neutral.80}', _dark: '{colors.darkNeutral.80}' },
    },
    subtlest: {
      value: { base: '{colors.neutral.70}', _dark: '{colors.darkNeutral.70}' },
    },
    bold: {
      value: {
        base: '{colors.neutral.110}',
        _dark: '{colors.darkNeutral.110}',
      },
    },
    inverse: {
      value: { base: '{colors.neutral.0}', _dark: '{colors.darkNeutral.10}' },
    },
    placeholder: {
      value: { base: '{colors.neutral.50}', _dark: '{colors.darkNeutral.60}' },
    },
    disabled: {
      value: {
        base: '{colors.neutralA.40}',
        _dark: '{colors.darkNeutralA.40}',
      },
    },
    success: {
      DEFAULT: {
        value: { base: '{colors.green.80}', _dark: '{colors.green.30}' },
      },
      inverse: {
        value: { base: '{colors.green.5}', _dark: '{colors.green.80}' },
      },
    },
    warning: {
      DEFAULT: {
        value: { base: '{colors.orange.80}', _dark: '{colors.orange.30}' },
      },
      inverse: {
        value: {
          base: '{colors.neutral.100}',
          _dark: '{colors.darkNeutral.10}',
        },
      },
    },
    danger: {
      DEFAULT: { value: { base: '{colors.red.80}', _dark: '{colors.red.30}' } },
      inverse: { value: { base: '{colors.red.1}', _dark: '{colors.red.90}' } },
    },
    cta: {
      DEFAULT: {
        value: { base: '{colors.gold.80}', _dark: '{colors.gold.20}' },
      },
      inverse: {
        value: { base: '{colors.gold.80}', _dark: '{colors.gold.80}' },
      },
    },
    info: { value: { base: '{colors.blue.80}', _dark: '{colors.blue.30}' } },
    accent: {
      neutral: {
        DEFAULT: {
          value: {
            base: '{colors.neutral.80}',
            _dark: '{colors.darkNeutral.80}',
          },
        },
        bold: {
          value: {
            base: '{colors.neutral.100}',
            _dark: '{colors.darkNeutral.100}',
          },
        },
      },
      gold: {
        DEFAULT: {
          value: { base: '{colors.gold.80}', _dark: '{colors.gold.30}' },
        },
        bold: {
          value: { base: '{colors.gold.90}', _dark: '{colors.gold.20}' },
        },
      },
      blue: {
        DEFAULT: {
          value: { base: '{colors.blue.80}', _dark: '{colors.blue.30}' },
        },
        bold: {
          value: { base: '{colors.blue.90}', _dark: '{colors.blue.20}' },
        },
      },
      green: {
        DEFAULT: {
          value: { base: '{colors.green.80}', _dark: '{colors.green.30}' },
        },
        bold: {
          value: { base: '{colors.green.90}', _dark: '{colors.green.20}' },
        },
      },
      yellow: {
        DEFAULT: {
          value: { base: '{colors.yellow.80}', _dark: '{colors.yellow.30}' },
        },
        bold: {
          value: { base: '{colors.yellow.90}', _dark: '{colors.yellow.20}' },
        },
      },
      red: {
        DEFAULT: {
          value: { base: '{colors.red.80}', _dark: '{colors.red.30}' },
        },
        bold: {
          value: { base: '{colors.red.90}', _dark: '{colors.red.20}' },
        },
      },
      tomato: {
        DEFAULT: {
          value: { base: '{colors.tomato.80}', _dark: '{colors.tomato.30}' },
        },
        bold: {
          value: { base: '{colors.tomato.90}', _dark: '{colors.tomato.20}' },
        },
      },
      tan: {
        DEFAULT: {
          value: { base: '{colors.tan.80}', _dark: '{colors.tan.30}' },
        },
        bold: {
          value: { base: '{colors.tan.90}', _dark: '{colors.tan.20}' },
        },
      },
      orange: {
        DEFAULT: {
          value: { base: '{colors.orange.80}', _dark: '{colors.orange.30}' },
        },
        bold: {
          value: { base: '{colors.orange.90}', _dark: '{colors.orange.20}' },
        },
      },
      pear: {
        DEFAULT: {
          value: { base: '{colors.pear.80}', _dark: '{colors.pear.30}' },
        },
        bold: {
          value: { base: '{colors.pear.90}', _dark: '{colors.pear.20}' },
        },
      },
      grass: {
        DEFAULT: {
          value: { base: '{colors.grass.80}', _dark: '{colors.grass.30}' },
        },
        bold: {
          value: { base: '{colors.grass.90}', _dark: '{colors.grass.20}' },
        },
      },
      mint: {
        DEFAULT: {
          value: { base: '{colors.mint.80}', _dark: '{colors.mint.30}' },
        },
        bold: {
          value: { base: '{colors.mint.90}', _dark: '{colors.mint.20}' },
        },
      },
      cyan: {
        DEFAULT: {
          value: { base: '{colors.cyan.80}', _dark: '{colors.cyan.30}' },
        },
        bold: {
          value: { base: '{colors.cyan.90}', _dark: '{colors.cyan.20}' },
        },
      },
      indigo: {
        DEFAULT: {
          value: { base: '{colors.indigo.80}', _dark: '{colors.indigo.30}' },
        },
        bold: {
          value: { base: '{colors.indigo.90}', _dark: '{colors.indigo.20}' },
        },
      },
      purple: {
        DEFAULT: {
          value: { base: '{colors.purple.80}', _dark: '{colors.purple.30}' },
        },
        bold: {
          value: { base: '{colors.purple.90}', _dark: '{colors.purple.20}' },
        },
      },
      violet: {
        DEFAULT: {
          value: { base: '{colors.violet.80}', _dark: '{colors.violet.30}' },
        },
        bold: {
          value: { base: '{colors.violet.90}', _dark: '{colors.violet.20}' },
        },
      },
      pink: {
        DEFAULT: {
          value: { base: '{colors.pink.80}', _dark: '{colors.pink.30}' },
        },
        bold: {
          value: { base: '{colors.pink.90}', _dark: '{colors.pink.20}' },
        },
      },
      rose: {
        DEFAULT: {
          value: { base: '{colors.rose.80}', _dark: '{colors.rose.30}' },
        },
        bold: {
          value: { base: '{colors.rose.90}', _dark: '{colors.rose.20}' },
        },
      },
      magenta: {
        DEFAULT: {
          value: { base: '{colors.magenta.80}', _dark: '{colors.magenta.30}' },
        },
        bold: {
          value: { base: '{colors.magenta.90}', _dark: '{colors.magenta.20}' },
        },
      },
    },
  },
  // TODO: delete below after migration
  brand: {
    slate: { value: '{colors.slate.90}' },
    gold: { value: '{colors.gold.20}' },
  },
  success: {
    lighter: {
      value: {
        base: '{colors.green.2}',
        _dark: '{colors.green.5}',
      },
    },
    light: {
      value: {
        base: '{colors.green.10}',
        _dark: '{colors.green.20}',
      },
    },
    default: {
      value: {
        base: '{colors.green.40}',
        _dark: '{colors.green.30}',
      },
    },
    dark: {
      value: {
        base: '{colors.green.60}',
        _dark: '{colors.green.60}',
      },
    },
    darker: {
      value: {
        base: '{colors.green.70}',
        _dark: '{colors.green.70}',
      },
    },
  },
  warning: {
    lighter: {
      value: {
        base: '{colors.yellow.2}',
        _dark: '{colors.yellow.2}',
      },
    },
    light: {
      value: {
        base: '{colors.yellow.10}',
        _dark: '{colors.yellow.10}',
      },
    },
    default: {
      value: {
        base: '{colors.yellow.30}',
        _dark: '{colors.yellow.20}',
      },
    },
    dark: {
      value: {
        base: '{colors.yellow.60}',
        _dark: '{colors.yellow.60}',
      },
    },
    darker: {
      value: {
        base: '{colors.yellow.70}',
        _dark: '{colors.yellow.70}',
      },
    },
  },
  error: {
    lighter: {
      value: {
        base: '{colors.red.2}',
        _dark: '{colors.red.5}',
      },
    },
    light: {
      value: {
        base: '{colors.red.10}',
        _dark: '{colors.red.20}',
      },
    },
    default: {
      value: {
        base: '{colors.red.50}',
        _dark: '{colors.red.40}',
      },
    },
    dark: {
      value: {
        base: '{colors.red.60}',
        _dark: '{colors.red.60}',
      },
    },
    darker: {
      value: {
        base: '{colors.red.70}',
        _dark: '{colors.red.70}',
      },
    },
  },
  info: {
    lighter: {
      value: {
        base: '{colors.blue.2}',
        _dark: '{colors.blue.5}',
      },
    },
    light: {
      value: {
        base: '{colors.blue.10}',
        _dark: '{colors.blue.20}',
      },
    },
    default: {
      value: {
        base: '{colors.blue.50}',
        _dark: '{colors.blue.40}',
      },
    },
    dark: {
      value: {
        base: '{colors.blue.60}',
        _dark: '{colors.blue.60}',
      },
    },
    darker: {
      value: {
        base: '{colors.blue.70}',
        _dark: '{colors.blue.70}',
      },
    },
  },
  utility: {
    shadowColor: {
      value: { base: '{colors.slate.90/20}', _dark: '{colors.slate.100/40}' },
    },
    headingColor: {
      value: {
        base: '{colors.slate.90}',
        _dark: '{colors.slate.5}',
      },
    },
    textColor: {
      value: {
        base: '{colors.slate.60}',
        _dark: '{colors.slate.30}',
      },
    },
    borderColor: {
      value: {
        base: '{colors.slate.10}',
        _dark: '{colors.slate.60}',
      },
    },
  },
});
