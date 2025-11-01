import { defineConfig, globalIgnores } from 'eslint/config'
import { eslintConfig, recommended } from '@mono/eslint-config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  eslintConfig,
  ...recommended,
])
