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
  },
  variants: {
    size: sizeVariants,
  },
  defaultVariants: {
    size: '24',
  },
  staticCss: [{ size: ['*'] }],
});
