import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      runtime: 'edge',
      images: {
        sizes: [640, 828, 1200, 1920, 3840],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 300,
        domains: ['boilerplate-sveltekit.querocriarsite.com']
      }
    }),
    alias: {
      '@': './src/*'
    }
  },
  csp: {
    directives: {
      'script-src': ['self']
    },
    reportOnly: {
      'script-src': ['self'],
      'report-uri': ['/']
    }
  }
}

export default config
