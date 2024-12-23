import pluginJs from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import { default as pluginReact, default as reactPlugin } from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
      '@typescript-eslint': typescriptEslint,
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parser: typescriptParser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/prop-types': 'off',
      'import/no-duplicates': 'error',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          endOfLine: 'lf',
          semi: true,
        },
      ],
      'padding-line-between-statements': [
        'error',
        // Always require blank lines after import, except between imports
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
        // Always require blank lines before and after every sequence of variable declarations and export
        { blankLine: 'always', prev: '*', next: ['const', 'let', 'var', 'export'] },
        { blankLine: 'always', prev: ['const', 'let', 'var', 'export'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var', 'export'],
          next: ['const', 'let', 'var', 'export'],
        },
        // Always require blank lines before and after class declaration, if, do/while, switch, try
        {
          blankLine: 'always',
          prev: '*',
          next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
        },
        {
          blankLine: 'always',
          prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
          next: '*',
        },
        // Always require blank lines before return statements
        { blankLine: 'always', prev: '*', next: 'return' },
        // Always require blank lines after block statement
        {
          blankLine: 'always',
          prev: ['multiline-block-like', 'multiline-expression', 'multiline-const', 'multiline-let', 'multiline-var'],
          next: '*',
        },
      ],
    },
  },
  {
    ignores: ['node_modules/**', '.next/**', 'public/**', 'next.config.mjs'],
  },
];
