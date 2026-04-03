import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactPlugin from 'eslint-plugin-react';
import unicorn from 'eslint-plugin-unicorn';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';
import cetecPlugin from './tools/eslint-plugin-cetec/index.js';

export default tseslint.config(
  {
    ignores: ['dist', 'storybook-static', 'styled-system', 'src/types/**'],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        React: true,
        JSX: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      cetec: cetecPlugin,
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      unicorn,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/consistent-type-imports': 'warn',
      'cetec/discourage-css-variable-styling': 'warn',
      'cetec/no-classname-css-call': 'error',
      'cetec/no-inline-style-prop': 'error',
      'cetec/no-pixel-units': 'error',
      'cetec/no-raw-font-weight-values': 'error',
      'cetec/no-react-namespace-type-imports': 'warn',
      'import/no-unresolved': 'warn',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@styled-system/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '~/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['src/components/**/*.tsx'],
    rules: {
      'unicorn/filename-case': [
        'warn',
        {
          cases: {
            pascalCase: true,
          },
          ignore: ['^index$'],
        },
      ],
      'cetec/no-react-fc-components': 'warn',
    },
    plugins: {
      cetec: cetecPlugin,
    },
  },
  {
    files: ['src/recipes/*.ts'],
    ignores: ['src/recipes/recipes-regular.ts', 'src/recipes/recipes-slot.ts'],
    rules: {
      'unicorn/filename-case': [
        'warn',
        {
          cases: {
            camelCase: true,
          },
          ignore: ['^index$'],
        },
      ],
      'cetec/recipe-export-name-matches-file': 'warn',
      'cetec/recipe-jsx-name-matches-component': 'warn',
      'cetec/no-hardcoded-design-values-in-recipes': 'warn',
    },
    plugins: {
      cetec: cetecPlugin,
    },
  },
  {
    files: ['src/contexts/**/*.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    files: ['src/components/Menu/**/*.tsx'],
    rules: {
      'cetec/no-inline-style-prop': 'off',
    },
  },
);
