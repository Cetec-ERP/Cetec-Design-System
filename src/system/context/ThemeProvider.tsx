import { useEffect, useState, type ReactNode } from 'react';

import { ThemeContext, type Theme } from './theme-context';

const THEME_STORAGE_KEY = 'cetec-theme-preference';

function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  if (storedTheme) {
    return storedTheme;
  }

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }

  return 'light';
}

/**
 * Provides the active color mode and persists explicit user choices in browser
 * storage.
 *
 * Without a saved preference, the initial mode follows
 * `prefers-color-scheme`; subsequent system changes are followed only until a
 * preference is saved through {@link useTheme}. This provider updates the
 * document's `data-color-mode` attribute and requires a browser environment.
 *
 * @example
 * ```tsx
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  useEffect(() => {
    document.documentElement.removeAttribute('data-color-mode');
    document.documentElement.removeAttribute('data-theme');

    document.documentElement.setAttribute('data-color-mode', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (!storedTheme) {
        setThemeState(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
