import { useEffect, useLayoutEffect, type ReactNode } from 'react';

import { Box, type BoxProps } from '~/components/Box';
import { ThemeProvider } from '~/contexts/ThemeContext';
import { useTheme } from '~/contexts/ThemeContext';

type PlayroomTheme = {
  name?: string;
};

type FrameComponentProps = {
  children?: ReactNode;
  themeName?: string | null;
  theme?: PlayroomTheme | string;
};

const THEME_STORAGE_KEY = 'cetec-theme-preference';

// Force iframe-level default to light (no system preference fallback)
if (typeof window !== 'undefined') {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (!storedTheme) {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'light');
  }
}

function ThemeBridge({ themeName }: { themeName: 'light' | 'dark' }) {
  const { theme, setTheme } = useTheme();

  useLayoutEffect(() => {
    if (theme !== themeName) {
      setTheme(themeName);
    }
  }, [theme, themeName, setTheme]);

  return null;
}

export default function FrameComponent({
  children,
  themeName,
  theme = 'light',
}: FrameComponentProps) {
  const resolvedThemeName =
    themeName && themeName !== '__PLAYROOM__NO_THEME__'
      ? themeName
      : typeof theme === 'string'
        ? theme.toLowerCase()
        : (theme?.name?.toLowerCase() ?? 'light');

  const colorMode = resolvedThemeName === 'dark' ? 'dark' : 'light';

  const frameBodyStyles: BoxProps = {
    display: 'flex',
    flexDir: 'column',
    gap: '16',
    h: 'full',
    w: 'full',
    bg: 'surface',
    p: '24',
  };

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, colorMode);
    document.documentElement.setAttribute('data-color-mode', colorMode);

    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0';
    document.body.style.background = 'surface';

    return () => {
      document.documentElement.removeAttribute('data-color-mode');
    };
  }, [colorMode]);

  return (
    <>
      <link rel="stylesheet" href="/playroom-fonts.css" type="text/css" />
      <link rel="stylesheet" href="/playroom-static.css" type="text/css" />
      <ThemeProvider>
        <ThemeBridge themeName={colorMode} />
        <Box {...frameBodyStyles}>{children}</Box>
      </ThemeProvider>
    </>
  );
}
