import { useContext } from 'react';

import { ThemeContext } from './theme-context';

/**
 * Returns the active color mode and a function to persist a new preference.
 *
 * Must be called beneath {@link ThemeProvider}; throws when no provider is
 * available.
 *
 * @example
 * ```tsx
 * const { theme, setTheme } = useTheme();
 * ```
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
