import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ['./src/vitest.setup.ts'],
    exclude: [...configDefaults.exclude, 'dist/**'],
    pool: 'threads',
    isolate: true,
  },
  resolve: {
    tsconfigPaths: true,
  },
})
