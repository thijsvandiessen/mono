import { defineConfig, configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    setupFiles: ['./src/vitest.setup.ts'],
    exclude: [...configDefaults.exclude, 'dist/**'],
    pool: 'threads',
    isolate: true,
  },
})
