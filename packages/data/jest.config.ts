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
    '^@mono/(.*)$': '<rootDir>../$1',
  },
}

export default config
