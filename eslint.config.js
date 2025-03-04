import globals from 'globals'
import js from '@eslint/js'
import { includeIgnoreFile } from '@eslint/compat'
import svelte from 'eslint-plugin-svelte'
import prettier from 'eslint-config-prettier'
import ts from 'typescript-eslint'
import svelteParser from 'svelte-eslint-parser'
import intlifySvelte from '@intlify/eslint-plugin-svelte'
import pluginPromise from 'eslint-plugin-promise'
import playwright from 'eslint-plugin-playwright'

const gitignorePath = new URL('./.gitignore', import.meta.url).pathname

export default ts.config(
  includeIgnoreFile(gitignorePath),
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '.cache/',
      '.git/',
      '.vscode/',
      '.idea/',
      '.vercel/',
      '.svelte-kit/',
      'public/',
      'static/',
      'e2e/',
      'playwright-report/',
      'playwright.config.ts',
      'pnpm-lock.yaml',
      '.gitignore',
      '.prettierignore',
      '.eslintcache',
      '.tsBuildInfoFile',
      'tsconfig.tsbuildinfo'
    ]
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  ...intlifySvelte.configs['flat/recommended'],
  pluginPromise.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      ecmaVersion: 2022
    },
    rules: {
      'no-console': 'error',
      'no-unused-vars': 'warn',
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      '@typescript-eslint/array-type': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      'object-shorthand': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'space-before-function-paren': 'off',
      'eslint-disable-next-line': 'off'
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: ts.parser,
        project: './tsconfig.json',
        extraFileExtensions: ['.svelte'],
        svelteConfig: './svelte.config.js',
        svelteFeatures: {
          runes: true,
          experimentalGenerics: false
        }
      },
      ecmaVersion: 2022
    },
    plugins: {
      svelte
    },
    rules: {
      ...svelte.configs['flat/recommended'].rules,
      'svelte/no-at-html-tags': 'off',
      'svelte/valid-compile': 'error',
      'svelte/no-unused-svelte-ignore': 'error',
      'svelte/no-reactive-reassign': 'error',
      'svelte/no-store-async': 'error',
      'svelte/require-each-key': 'off',
      '@intlify/svelte/no-raw-text': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'svelte/no-useless-children-snippet': 'off'
    }
  },
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { varsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'no-var': 'error',
      'prefer-const': 'warn',
      eqeqeq: ['error', 'always']
    }
  },
  {
    ...playwright.configs['flat/recommended'],
    files: ['e2e/**'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'playwright/no-skipped-test': 'off'
    }
  }
)
