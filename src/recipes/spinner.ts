import { defineSlotRecipe } from '@pandacss/dev';

const spinnerBase = {
  container: {
    position: 'relative',
    display: 'grid',
    placeContent: 'center',
    zIndex: '100',
    w: 'fit',
    h: 'fit',
    flex: '0',
  },
  spinnerSvg: {
    aspectRatio: 'square',
    animation: 'spin',
    fill: 'icon',
    isolation: 'isolate',
    flex: '0',
  },
};

const spinnerVariants = {
  size: {
    sm: {
      spinnerSvg: {
        h: '16',
        w: '16',
        minHeight: '16',
      },
    },
    md: {
      spinnerSvg: {
        h: '20',
        w: '20',
        minHeight: '20',
      },
    },
    lg: {
      spinnerSvg: {
        h: '24',
        w: '24',
        minHeight: '24',
      },
    },
    xl: {
      spinnerSvg: {
        h: '28',
        w: '28',
        minHeight: '28',
      },
    },
  },
  inverse: {
    true: {
      spinnerSvg: {
        fill: 'icon.inverse',
      },
    },
  },
  centered: {
    true: {
      container: {
        position: 'absolute',
        inset: '0',
        width: 'full',
        height: 'full',
      },
    },
    false: {
      container: {
        position: 'relative',
      },
    },
  },
};

export const spinnerRecipe = defineSlotRecipe({
  className: 'spinner',
  jsx: ['Spinner'],
  slots: ['container', 'spinnerSvg'],
  base: spinnerBase,
  variants: spinnerVariants,
  defaultVariants: {
    size: 'md',
  },
});
