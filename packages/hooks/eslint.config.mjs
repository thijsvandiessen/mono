import {
  defineConfig,
  eslintConfig,
  globalIgnores,
  recommended,
} from '@mono/eslint-config'

export default defineConfig([
  globalIgnores(['dist/*', 'coverage', 'node_modules/*']),
  eslintConfig,
  ...recommended,
])
