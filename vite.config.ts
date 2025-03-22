import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],

  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,svelte}'],
      exclude: ['src/assets/', 'src/tests/']
    },
    pool: 'forks',
    poolOptions: {
      forks: {
        isolate: false
      }
    },
    globals: true,
    passWithNoTests: true,
    clearMocks: true,
    include: ['src/**/__tests__/*.test.ts'],
    exclude: ['**/node_modules/**', '**/playwright/**'],
    setupFiles: ['./vitest.setup.ts']
  },
  resolve: {
    conditions: ['development', 'browser']
  }
})
