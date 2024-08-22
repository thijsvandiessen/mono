import { type Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: '../../apps/example',
})

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
    '^@mono/(.*)$': '<rootDir>../$1/src/index.ts',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
