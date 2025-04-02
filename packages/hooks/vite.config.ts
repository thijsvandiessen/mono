import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: ['./src/index.ts'],
      name: 'hooks',
      // the proper extensions will be added
      fileName: 'hooks',
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', '/node_modules/'],
      output: {
        inlineDynamicImports: false,
        preserveModules: true,
        dir: 'dist',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
  },
})
