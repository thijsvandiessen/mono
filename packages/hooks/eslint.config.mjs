import {
  defineConfig,
  eslintConfig,
  globalIgnores,
  recommended,
  tsLintConfig,
} from '@mono/eslint-config'

export default defineConfig([
  globalIgnores(['dist/*', 'coverage', 'node_modules/*']),
  eslintConfig,
  ...recommended,
  tsLintConfig,
])
