import { createContext } from 'react';

/** Supported document color modes. */
export type Theme = 'light' | 'dark';

/** Value returned by {@link useTheme} and provided by {@link ThemeProvider}. */
export interface ThemeContextType {
  /** Currently active color mode. */
  theme: Theme;
  /**
   * Sets the active color mode and persists it as the user's browser
   * preference.
   */
  setTheme: (theme: Theme) => void;
}

/** Context backing {@link ThemeProvider}; prefer {@link useTheme} in consumers. */
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
