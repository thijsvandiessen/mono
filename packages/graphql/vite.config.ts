import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: ['./src/index.ts'],
      name: 'graphql',
      fileName: 'graphql',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        preserveModules: true,
        dir: 'dist',
      },
    },
    sourcemap: true,
  },

  plugins: [dts({ outDir: 'dist', rollupTypes: true })],
})
