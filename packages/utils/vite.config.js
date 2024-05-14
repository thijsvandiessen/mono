import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: 'src',
      name: 'utils',
      // the proper extensions will be added
      fileName: 'utils',
    },
  },
  plugins: [dts({ outDir: 'dist', rollupTypes: true })],
})
