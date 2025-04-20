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
      // Could also be a dictionary or array of multiple entry points
      entry: ['./src/index.ts'],
      name: 'index',
      // the proper extensions will be added
      fileName: 'index',
    },
  },
})
