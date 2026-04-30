import { defineRecipe } from '@pandacss/dev';

import type { AllowedIconSizes } from '~/components/Icon';
import { numericSizes } from '~/styles/primitives';

const sizeVariants = Object.fromEntries(
  Object.keys(numericSizes).map((key) => [key, { w: key }]),
) as Record<AllowedIconSizes, { w: AllowedIconSizes }>;

export const iconRecipe = defineRecipe({
  className: 'icon',
  jsx: ['Icon'],
  base: {
    aspectRatio: 'square',
    fill: 'icon.decorative',
    w: '24', // Default size here does not affect the classNames, so it's safe to set
  },
  variants: {
    size: {
      ...sizeVariants,
      sm: { w: '16' },
      md: { w: '20' },
      lg: { w: '24' },
      xl: { w: '28' },
    },
  },
  defaultVariants: {
    // Don't set default size because then it's hard to override in recipes
  },
});
