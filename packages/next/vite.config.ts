import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  build: {
    lib: {
      entry: 'src',
      name: 'next-config',
      fileName: 'next-config',
    },
    rollupOptions: {
      external: ['fs'],
    },
  },
  plugins: [nodePolyfills()],
})
