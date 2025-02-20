import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],

  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,svelte}'],
      exclude: ['node_modules/']
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
    include: ['src/**/*.test.ts'],
    exclude: ['**/playwright/**'],
    setupFiles: ['./vitest-setup-client.ts']
  },
  resolve: {
    conditions: ['development', 'browser']
  }
})
