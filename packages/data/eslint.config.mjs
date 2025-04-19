import { defineConfig, globalIgnores } from 'eslint/config'
import { eslintConfig } from '@mono/eslint-config'

export default defineConfig([
  globalIgnores(['src/generated/*.ts', 'dist/*', 'node_modules']),
  eslintConfig,
])
