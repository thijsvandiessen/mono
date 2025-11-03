import testingLibrary from 'eslint-plugin-testing-library'
import eslint from '@eslint/js'
import tseslint, { type Config } from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import type { Linter } from 'eslint'

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

export const recommended: Readonly<Config | Linter.Config>[] = [
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
]
