import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';

import {
  FloatingPortal,
  FloatingFocusManager,
  useDismiss,
  useInteractions,
  FloatingOverlay,
} from '@floating-ui/react';

import { cx } from '@styled-system/css';
import {
  modal as modalRecipe,
  type ModalVariantProps,
} from '@styled-system/recipes';

import { useOverlayFloating } from '~/system/floating-ui/floating';
import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { DsChainPortalRoot } from '../DsChainScope/DsChainPortalRoot';

import { ModalContext, type ModalContextValue } from './ModalContext';

/** Props for {@link Modal}, a controlled, portalled dialog. */
export type ModalProps = Omit<BoxProps, keyof ModalVariantProps> &
  ModalVariantProps & {
    /** Controlled dialog state. Render state changes by updating this value after `onOpenChange`. */
    open: boolean;
    /** Called when Escape, overlay interaction, or a descendant close control requests closing. */
    onOpenChange: (open: boolean) => void;
    /**
     * Prevents overlay clicks from requesting close. Escape still requests close.
     * @default false
     */
    preventOverlayClose?: boolean;
    /** Dialog content, typically composed from `ModalHeader`, `ModalBody`, and `ModalFooter`. */
    children: ReactNode;
    /** Identifier applied to the dialog element. Provide accessible naming with `aria-label` or `aria-labelledby`. */
    id?: string;
    /**
     * Recipe size for the dialog panel.
     * @default 'md'
     */
    size?: ModalVariantProps['size'];
    /**
     * Recipe position for the dialog panel.
     * @default 'centered'
     */
    position?: ModalVariantProps['position'];
  };

type ModalPhase = 'open' | 'closing' | 'closed';

type ModalState = {
  phase: ModalPhase;
};

type ModalAction =
  | { type: 'open' }
  | { type: 'startClosing' }
  | { type: 'finishClosing' };

const modalStateReducer = (
  state: ModalState,
  action: ModalAction,
): ModalState => {
  switch (action.type) {
    case 'open':
      return { phase: 'open' };
    case 'startClosing':
      if (state.phase === 'closed') {
        return state;
      }
      return { phase: 'closing' };
    case 'finishClosing':
      return { phase: 'closed' };
    default:
      return state;
  }
};

/**
 * Renders a controlled modal dialog in a portal with focus management and a
 * scroll-locking overlay.
 *
 * Escape always calls `onOpenChange(false)`. By default, pressing the overlay
 * does too. The dialog remains mounted for a 150 ms closing animation. Supply
 * an accessible name through `aria-label` or `aria-labelledby`; a visible
 * `ModalHeader` title alone is not linked automatically.
 *
 * @example
 * ```tsx
 * <Modal open={open} onOpenChange={setOpen} aria-label="Delete project">
 *   <ModalHeader title="Delete project" />
 *   <ModalBody>This cannot be undone.</ModalBody>
 *   <ModalFooter><Button onClick={remove}>Delete</Button></ModalFooter>
 * </Modal>
 * ```
 */
export const Modal = (props: ModalProps) => {
  const {
    open,
    onOpenChange,
    size = 'md',
    preventOverlayClose = false,
    children,
    id,
    position = 'centered',
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);
  const classes = modalRecipe({ size, position });
  const [{ phase }, dispatch] = useReducer(modalStateReducer, {
    phase: open ? 'open' : 'closed',
  });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Floating UI setup
  const { refs, context } = useOverlayFloating({
    open,
    onOpenChange,
    strategy: 'fixed',
    middleware: [],
  });

  // Dismiss on Escape key
  const dismiss = useDismiss(context, {
    outsidePress: !preventOverlayClose,
  });

  const { getFloatingProps } = useInteractions([dismiss]);

  // Handle open/close state with animation
  useEffect(() => {
    if (open) {
      dispatch({ type: 'open' });
      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    dispatch({ type: 'startClosing' });
    timeoutRef.current = setTimeout(() => {
      dispatch({ type: 'finishClosing' });
    }, 150);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open]);

  const onClose = useCallback(() => onOpenChange(false), [onOpenChange]);
  const contextValue: ModalContextValue = useMemo(
    () => ({
      open: phase === 'open',
      onClose,
      preventOverlayClose,
    }),
    [onClose, phase, preventOverlayClose],
  );

  if (phase === 'closed') {
    return null;
  }

  const dataState = phase === 'closing' ? 'closing' : 'open';

  return (
    <ModalContext.Provider value={contextValue}>
      <FloatingPortal>
        <DsChainPortalRoot>
          <Box className={classes.positionWrapper}>
            <FloatingOverlay
              lockScroll
              className={classes.overlay}
              data-state={dataState}
              onClick={
                preventOverlayClose ? undefined : () => onOpenChange(false)
              }
              aria-hidden="true"
            />
            <FloatingFocusManager context={context} modal={true}>
              <Box
                {...dsComponent('Modal')}
                ref={refs.setFloating}
                className={cx(classes.container, className)}
                data-state={dataState}
                id={id}
                role="dialog"
                aria-modal="true"
                {...(getFloatingProps() as Record<string, unknown>)}
                {...otherProps}
              >
                {children}
              </Box>
            </FloatingFocusManager>
          </Box>
        </DsChainPortalRoot>
      </FloatingPortal>
    </ModalContext.Provider>
  );
};
