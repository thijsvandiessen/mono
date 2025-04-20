import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      tsconfigPath: './tsconfig.json',
    }),
  ],
  build: {
    lib: {
      entry: ['./src/index.ts'],
      name: 'index',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        preserveModules: true,
        dir: 'dist',
      },
    },
  },
})
