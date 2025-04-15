import { defineConfig, globalIgnores } from 'eslint/config'
import { eslintConfig } from '@mono/eslint-config'

export default defineConfig([
  globalIgnores(['**/generated/*.ts', 'dist/*', 'node_modules']),
  eslintConfig,
])
