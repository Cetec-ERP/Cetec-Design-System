import React from 'react';
import { ThemeProvider } from '../src/contexts/ThemeContext';
import { ThemeSwitcher } from '../src/components/ThemeSwitcher';
import { Flex } from '../styled-system/jsx';
import { Text } from '../src/components/Text';

export default function FrameComponent({
  theme = 'light',
  children,
}: {
  children?: React.ReactNode;
  theme?: any; // Playroom passes theme object, not string
}) {
  // Extract theme name from Playroom's theme object
  const themeName = typeof theme === 'string' ? theme : theme?.name?.toLowerCase() || 'light';

  // Set theme on document element (like your main app does)
  React.useEffect(() => {
    document.documentElement.setAttribute('data-color-mode', themeName);

    // Cleanup function to reset on unmount
    return () => {
      document.documentElement.removeAttribute('data-color-mode');
    };
  }, [themeName]);

  return (
    <>
      <link rel="stylesheet" href="/font-imports.css" type="text/css" />
      <link rel="stylesheet" href="/playroom-static.css" type="text/css" />

      {/* ThemeProvider with Playroom theme integration */}
      <ThemeProvider>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          w="full"
          bg={{ base: "slate.5", _dark: "slate.80" }}
          py="4"
          px="12"
        >
          <Text textStyle="mono-sm" weight="bold">
            Design System Playroom
          </Text>
          <ThemeSwitcher />
        </Flex>
        <Flex
          w="full"
          p="20"
        >
          {children}
        </Flex>
      </ThemeProvider>
    </>
  );
}