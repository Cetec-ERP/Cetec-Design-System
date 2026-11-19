import { createContext, useContext } from 'react';

import type { SplitButtonVariantProps } from '@styled-system/recipes';

/** Values a `SplitButton` passes to its `SplitButton.Menu`. */
export type SplitButtonContextValue = {
  variant: SplitButtonVariantProps['variant'];
  size: SplitButtonVariantProps['size'];
  /** Accessible name of the toggle. Falls back to the locale label. */
  menuLabel?: string;
  /** Disables the toggle and explains why. */
  menuDisabledReason?: string;
  /** Recipe class for the toggle half. */
  toggleClassName: string;
};

export const SplitButtonContext = createContext<SplitButtonContextValue | null>(
  null,
);

/** Reads the parent `SplitButton`. Throws outside one. */
export const useSplitButtonContext = () => {
  const context = useContext(SplitButtonContext);

  if (!context) {
    throw new Error(
      'SplitButton.Menu must be a direct child of SplitButton, not rendered by another component.',
    );
  }

  return context;
};
