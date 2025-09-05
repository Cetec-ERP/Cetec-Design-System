import React from 'react';
import { ThemeProvider } from '../src/contexts/ThemeContext';

export default function FrameComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="/preflight.css" />
      <link rel="stylesheet" href="/tokens.css" />
      <link rel="stylesheet" href="/keyframes.css" />
      <link rel="stylesheet" href="/global.css" />
      <link rel="stylesheet" href="/utilities.css" />
      {/* <link rel="stylesheet" href="/playroom.css" /> */}
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </>
  );
}
