import node from '@astrojs/node'
import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'middleware',
  }),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp', 'html-escaper'],
    },
  },
})
