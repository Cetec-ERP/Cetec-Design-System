import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styled-system': path.resolve(__dirname, './styled-system'),
    },
  },
  base: '/',
  ...(process.env.GH_REPO
    ? {}
    : {
        build: {
          lib: {
            name: 'Cetec Design System',
            fileName: (format) => `cetec-design-system.${format}.js`,
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
          },
          rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
              },
            },
          },
        },
      }),
});
