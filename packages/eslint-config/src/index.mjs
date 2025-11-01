import testingLibrary from 'eslint-plugin-testing-library'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

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

export const recommended = [
  eslint.configs.recommended,
  tseslint.configs.recommended,
]
