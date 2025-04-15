import { defineConfig, globalIgnores } from 'eslint/config'
import { FlatCompat } from '@eslint/eslintrc'
import { eslintConfig } from '@mono/eslint-config'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default defineConfig([
  globalIgnores(['.next', '.turbo', 'node_modules']),
  eslintConfig,
  ...compat.config({
    extends: ['next', 'prettier', 'next/core-web-vitals'],
  }),
])
