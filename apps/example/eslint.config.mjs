import {
  defineConfig,
  eslintConfig,
  globalIgnores,
  recommended,
} from '@mono/eslint-config'

import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  globalIgnores([
    'node_modules',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.turbo/**',
  ]),
  eslintConfig,
  ...recommended,
  ...nextVitals,
])
