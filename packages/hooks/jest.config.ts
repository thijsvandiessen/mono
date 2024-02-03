// Add any custom config to be passed to Jest

import { type Config } from 'jest'

const config: Config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['./jest.setup.cjs'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babel: true,
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
}

export default config
