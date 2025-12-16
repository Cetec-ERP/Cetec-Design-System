import { defineSemanticTokens } from '@pandacss/dev';

export const shadows = defineSemanticTokens.shadows({
  raised: {
    value: {
      base: [
        '{sizes.0} {sizes.1} {sizes.1} rgba(30, 31, 33, 0.25)',
        '{sizes.0} {sizes.0} {sizes.1} rgba(30, 31, 33, 0.31)',
      ],
      _dark: [
        '{sizes.0} {sizes.0} {sizes.0} rgba(0, 0, 0, 0)',
        '{sizes.0} {sizes.1} {sizes.1} rgba(1, 4, 4, 0.5)',
        '{sizes.0} {sizes.0} {sizes.1} rgba(1, 4, 4, 0.5)',
      ],
    },
  },
  overlay: {
    value: {
      base: [
        '{sizes.0} {sizes.8} {sizes.12} rgba(30, 31, 33, 0.15)',
        '{sizes.0} {sizes.0} {sizes.1} rgba(30, 31, 33, 0.31)',
      ],
      _dark: [
        '{sizes.0} {sizes.0} {sizes.0} rgba(189, 189, 189, 0.12)',
        '{sizes.0} {sizes.8} {sizes.12} rgba(1, 4, 4, 0.36)',
        '{sizes.0} {sizes.0} {sizes.1} rgba(1, 4, 4, 0.5)',
      ],
    },
  },
  overflow: {
    value: {
      base: [
        '{sizes.0} {sizes.0} {sizes.8} rgba(30, 31, 33, 0.16)',
        '{sizes.0} {sizes.0} {sizes.1} rgba(30, 31, 33, 0.12)',
      ],
      _dark: [
        '{sizes.0} {sizes.0} {sizes.12} rgba(1, 4, 4, 0.56)',
        '{sizes.0} {sizes.0} {sizes.1} rgba(1, 4, 4, 0.5)',
      ],
    },
  },
  // TODO: delete below once migration is complete
  low: {
    value: [
      '{sizes.0} {sizes.0} {sizes.2} {colors.utility.shadowColor}',
      '{sizes.0} {sizes.1} {sizes.1} {colors.utility.shadowColor}',
      '{sizes.0} {sizes.2} {sizes.3} {colors.utility.shadowColor}',
    ],
  },
  medium: {
    value: [
      '{sizes.0} {sizes.0} {sizes.2} {colors.utility.shadowColor}',
      '{sizes.0} {sizes.2} {sizes.2} {colors.utility.shadowColor}',
      '{sizes.0} {sizes.4} {sizes.4} {colors.utility.shadowColor}',
      '{sizes.0} {sizes.8} {sizes.8} {colors.utility.shadowColor}',
    ],
  },
  high: {
    value: [
      '{sizes.0} {sizes.0} {sizes.2} {colors.utility.shadowColor}',
      '{sizes.0} {sizes.2} {sizes.4} {colors.utility.shadowColor}',
      '{sizes.0} {sizes.6} {sizes.8} {sizes.1} {colors.utility.shadowColor}',
      '{sizes.0} {sizes.14} {sizes.16} {sizes.2} {colors.utility.shadowColor}',
    ],
  },
  inset: {
    value: [
      'inset {sizes.0} {sizes.0} {sizes.2} {colors.utility.shadowColor}',
      'inset {sizes.0} {sizes.2} {sizes.1} {colors.utility.shadowColor}',
      'inset {sizes.0} {sizes.3} {sizes.2} {colors.utility.shadowColor}',
    ],
  },
});
