import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

const modalBase = {
  overlay: {
    position: 'fixed',
    inset: '0',
    bg: 'blanket',
    zIndex: 1100,
    // Initial state matches animation start
    opacity: '0',
    // Animation handled via data-state
    animation: 'modalFadeIn 150ms ease-out forwards',
    '&[data-state="closing"]': {
      animation: 'modalFadeOut 150ms ease-out forwards',
    },
  },
  container: {
    ...globalBaseStyles,
    position: 'fixed',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    width: 'full',
    maxW: '95vw',
    maxHeight: '95vh',
    bg: 'surface.overlay',
    borderRadius: '12',
    boxShadow: 'overlay',
    outline: 'none',
    zIndex: 1101,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12',
    px: '20',
    py: '12',
    borderBottom: 'default',
  },
  title: {
    w: 'full',
    truncate: true,
  },
  closeButton: {
    // IconButton styles will be applied via IconButton component
    // This slot is for any additional wrapper styling if needed
  },
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    gap: '12',
    px: '20',
    py: '20',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '8',
    px: '20',
    py: '12',
    borderTop: 'default',
  },
};

/** Base-like positioning when `position: top` would fight a full-viewport sheet */
const modalContainerCenteredOverlay = {
  top: '50%',
  transform: 'translate(-50%, -50%) scale(0.95) translateY(-10px)',
  animation: 'modalScaleIn 150ms ease-out forwards',
  '&[data-state="closing"]': {
    animation: 'modalScaleOut 150ms ease-out forwards',
  },
};

const modalVariants = {
  size: {
    sm: {
      container: {
        w: 'md',
      },
    },
    md: {
      container: {
        w: 'xl',
      },
    },
    lg: {
      container: {
        w: '3xl',
      },
    },
    xl: {
      container: {
        w: '5xl',
      },
    },
    full: {
      container: {
        w: '95vw',
      },
    },
    mobile: {
      container: {
        width: 'full',
        height: 'full',
        maxWidth: '100vw',
        maxHeight: '100vh',
        borderRadius: '0',
        top: '0',
        transform: 'translate(-50%, -50%) scale(0.95) translateY(-10px)',
        animation: 'modalScaleIn 150ms ease-out forwards',
        '&[data-state="closing"]': {
          animation: 'modalScaleOut 150ms ease-out forwards',
        },
      },
    },
  },
  position: {
    centered: {
      container: modalContainerCenteredOverlay,
    },
    top: {
      container: {
        top: 'min(2.5vh, token(spacing.64))',
        transform: 'translate(-50%, 0) scale(0.95) translateY(-10px)',
        animation: 'modalScaleInTop 150ms ease-out forwards',
        '&[data-state="closing"]': {
          animation: 'modalScaleOutTop 150ms ease-out forwards',
        },
        // Align with default centered overlay at `xsDown` (full-viewport sheet):
        // without this, `top` + fixed offset leaves a gap above the sheet.
        xsDown: modalContainerCenteredOverlay,
      },
    },
  },
  variant: {
    default: {
      container: {
        xsDown: {
          width: 'full',
          height: 'full',
          maxWidth: '100vw',
          maxHeight: '100vh',
          borderRadius: '0',
        },
      },
    },
    confirmation: {
      container: {
        height: 'fit',
        width: 'md',
        maxWidth: '90vw',
      },
    },
  },
};

export const modalRecipe = defineSlotRecipe({
  className: 'modal',
  jsx: ['Modal', 'ModalHeader', 'ModalBody', 'ModalFooter'],
  slots: [
    'overlay',
    'container',
    'header',
    'title',
    'closeButton',
    'body',
    'footer',
  ],
  base: modalBase,
  variants: modalVariants,
  defaultVariants: {
    variant: 'default',
    size: 'md',
    position: 'centered',
  },
});
