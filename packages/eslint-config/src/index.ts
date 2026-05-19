import testingLibrary from 'eslint-plugin-testing-library'
import eslint from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import type { Linter } from 'eslint'

export { defineConfig, globalIgnores } from 'eslint/config'

export const eslintConfig = {
  plugins: {
    'testing-library': testingLibrary,
  },
  rules: {
    'require-await': ['warn'],
    'no-unused-vars': ['warn'],
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
  },
}

export const recommended: Linter.Config[] = [
  eslint.configs.recommended,
  reactHooks.configs.flat.recommended,
]
