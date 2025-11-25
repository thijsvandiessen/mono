import {
  defineConfig,
  eslintConfig,
  globalIgnores,
  recommended,
  tsLintConfig,
} from '@mono/eslint-config'

export default defineConfig([
  globalIgnores(['src/generated/*.ts', 'coverage', 'dist/*', 'node_modules']),
  eslintConfig,
  ...recommended,
  tsLintConfig,
])
