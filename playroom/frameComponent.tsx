import React from 'react';
import { ThemeProvider } from '../src/contexts/ThemeContext';

export default function FrameComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="/playroom.css" />
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </>
  );
}
