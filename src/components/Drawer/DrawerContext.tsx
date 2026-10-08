import { createContext, useContext } from 'react';

/** State and close behavior shared with descendants of {@link Drawer}. */
export interface DrawerContextValue {
  /** Whether the drawer is currently in its open phase. */
  open: boolean;
  /** Requests closing through the parent drawer's `onOpenChange(false)`. */
  onClose: () => void;
  /** Whether the parent drawer traps focus and blocks the page behind it. */
  modal: boolean;
}

export const DrawerContext = createContext<DrawerContextValue | null>(null);

/**
 * Returns state and close behavior from the closest parent {@link Drawer}.
 *
 * Call only in a drawer descendant; it throws when no drawer context is present.
 * Use it to build a custom close control inside a custom {@link DrawerHeader}.
 *
 * @example
 * ```tsx
 * const { onClose } = useDrawerContext();
 * ```
 */
export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('Drawer components must be used within a <Drawer>');
  }
  return context;
};
