// Add any custom config to be passed to Jest

import { type Config } from 'jest'

const config: Config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['./jest.setup.cjs'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '@mono/graphql': '<rootDir>../graphql',
    '@mono/utils': '<rootDir>../utils',
  },
}

export default config
