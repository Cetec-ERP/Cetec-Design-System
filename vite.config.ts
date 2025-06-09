import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as path from 'path';

// https://vitejs.dev/config/
const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'cetec-design-system',
      fileName: 'cetec-design-system',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          vue: 'react',
        },
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname, './src') },
      {
        find: '@styled-system',
        replacement: path.resolve(__dirname, './styled-system'),
      },
    ],
  },
  base: '/',
  ...(process.env.GH_REPO
    ? {}
    : {
        build: {
          lib: {
            name: 'Cetec Design System',
            fileName: (format) => `cetec-design-system.${format}.js`,
            entry: './src/main.tsx',
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
