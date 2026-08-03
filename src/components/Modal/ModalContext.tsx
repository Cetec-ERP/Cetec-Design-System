import { createContext, useContext } from 'react';

/** State and close behavior shared with descendants of {@link Modal}. */
export interface ModalContextValue {
  /** Whether the modal is currently in its open phase. */
  open: boolean;
  /** Requests closing through the parent modal's `onOpenChange(false)`. */
  onClose: () => void;
  /** Whether the parent modal blocks overlay-triggered closing. */
  preventOverlayClose?: boolean;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

/**
 * Returns state and close behavior from the closest parent {@link Modal}.
 *
 * Call only in a modal descendant; it throws when no modal context is present.
 *
 * @example
 * ```tsx
 * const { onClose } = useModalContext();
 * ```
 */
export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used within a <Modal> provider');
  }
  return context;
};
