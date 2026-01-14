import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig(({ mode: _mode }) => {
  const isGitHubPages = !!process.env.GH_REPO;

  if (isGitHubPages) {
    // GitHub Pages build
    return {
      plugins: [react()],
      base: `/${process.env.GH_REPO}/`,
      resolve: {
        alias: {
          '~': resolve(__dirname, './src'),
          '@styled-system': resolve(__dirname, './styled-system'),
        },
      },
      build: {
        outDir: 'dist',
      },
    };
  }

  // Library build mode (default)
  return {
    plugins: [
      react(),
      dts({
        include: ['src/**/*', 'cetec-preset.ts'],
        exclude: ['src/**/*.stories.tsx'],
        rollupTypes: true,
      }),
      viteStaticCopy({
        targets: [
          {
            src: 'styled-system/specs',
            dest: './',
          },
          {
            src: 'styled-system/styles',
            dest: './',
          },
          {
            src: 'styled-system/styles.css',
            dest: './',
          },
          {
            src: '.mcp.json',
            dest: './',
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        '~': resolve(__dirname, './src'),
        '@styled-system': resolve(__dirname, './styled-system'),
      },
    },
    build: {
      lib: {
        name: 'cetec-design-system',
        entry: {
          index: resolve(__dirname, 'src/index.ts'),
          preset: resolve(__dirname, 'cetec-preset.ts'),
        },
        formats: ['es'],
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime', '@pandacss/dev'],
        output: {
          preserveModules: false,
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name].js',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
      sourcemap: true,
      minify: false, // Keep readable for debugging
    },
  };
});
