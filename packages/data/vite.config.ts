import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      rollupTypes: true,
      tsconfigPath: './tsconfig.json',
    }),
  ],
  build: {
    lib: {
      entry: ['./src/index.ts'],
      name: 'index',
      fileName: 'index',
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
