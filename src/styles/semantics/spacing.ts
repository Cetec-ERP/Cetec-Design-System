import { defineSemanticTokens } from '@pandacss/dev';

/**
 * The print spacing scale, in points. Print recipes take every gap, margin,
 * and padding of their paper look from these seven steps, so the space
 * holds on any printer: 2, 4, 6, 8, 12, 16, and 24 pt. Each key is its size
 * in points, so `print.12` is 12 pt.
 *
 * Sizes of a part, such as a logo height or a stock width, are not spacing.
 * They stay in `sizes`.
 */
export const spacing = defineSemanticTokens.spacing({
  print: {
    /** 2 pt. The inset at the top and bottom of a canvas slot. */
    '2': { value: '2pt' },
    /** 4 pt. */
    '4': { value: '4pt' },
    /** 6 pt. The inset at the sides of a canvas slot. */
    '6': { value: '6pt' },
    /** 8 pt. */
    '8': { value: '8pt' },
    /** 12 pt. The space above each top-level block after the first. */
    '12': { value: '12pt' },
    /** 16 pt. */
    '16': { value: '16pt' },
    /** 24 pt. */
    '24': { value: '24pt' },
  },
});
