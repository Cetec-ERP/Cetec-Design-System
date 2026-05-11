import { defineRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

export const skeletonRecipe = defineRecipe({
  className: 'skeleton',
  jsx: ['Skeleton'],
  base: {
    ...globalBaseStyles,
    display: 'block',
    position: 'relative',
    overflow: 'hidden',
    verticalAlign: 'middle',
    flexShrink: '0',
    userSelect: 'none',
    color: 'transparent',
    bg: 'bg.neutral.hovered',
  },
  variants: {
    variant: {
      text: {
        h: '24',
        borderRadius: '4',
        transformOrigin: '0 55%',
        transform: 'scale(1, 0.6)',
      },
      circular: {
        aspectRatio: 'square',
        borderRadius: '999',
      },
      rounded: {
        borderRadius: '4',
      },
      rectangular: {
        borderRadius: '0',
      },
    },
    animation: {
      pulse: {
        animation: 'pulse',
      },
      wave: {
        isolation: 'isolate',
        backgroundSize: '400% 100%',
        backgroundImage:
          'linear-gradient(90deg, transparent 40%, var(--cetec-colors-bg-accent-neutral-subtlest) 50%, transparent 60%)',
        animation: '[skeletonWave 6s infinite linear]',
      },
      none: {},
    },
    hasChildren: {
      true: {
        '& > *': {
          visibility: 'hidden',
        },
      },
    },
    fitContent: {
      true: {
        maxWidth: 'fit',
      },
    },
    heightAuto: {
      true: {
        height: 'auto',
      },
    },
  },
  defaultVariants: {
    variant: 'text',
    animation: 'pulse',
  },
});
