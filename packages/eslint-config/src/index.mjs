import globals from 'globals'
import testingLibrary from 'eslint-plugin-testing-library'

export const eslintConfig = {
  plugins: {
    'testing-library': testingLibrary,
  },
  languageOptions: {
    globals: {
      ...globals.jest,
    },
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
