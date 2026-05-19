import { defineConfig, eslintConfig, globalIgnores } from '@mono/eslint-config'

export default defineConfig([
  globalIgnores(['dist/*', 'node_modules']),
  eslintConfig,
])
