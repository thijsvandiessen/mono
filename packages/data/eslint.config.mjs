import { defineConfig, globalIgnores } from 'eslint/config'
import { eslintConfig, recommended } from '@mono/eslint-config'

export default defineConfig([
  globalIgnores(['src/generated/*.ts', 'coverage', 'dist/*', 'node_modules']),
  eslintConfig,
  ...recommended,
])
