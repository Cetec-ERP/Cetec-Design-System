import React from 'react';
// import { tokenTheme } from '../src/theme'; // adjust path to your theme
// import { ThemeProvider } from '../src/contexts/ThemeContext';
// import { PandaProvider } from '@pandacss/dev' // replace with actual provider if available

// export default function FrameComponent({ children }) {
//   return (
//     <PandaProvider theme={ThemeProvider}>
//       {children}
//     </PandaProvider>
//   );
// }

import '../dist/styles.css'; // ← adjust this to your Panda-generated CSS file

export default function FrameComponent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}