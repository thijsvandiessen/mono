import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: ['./src/index.ts'],
      name: 'data',
      fileName: 'data',
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
})
