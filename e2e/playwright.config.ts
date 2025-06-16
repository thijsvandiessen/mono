import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Run all tests in parallel.
  fullyParallel: true,

  use: {
    baseURL: 'http://localhost:3000',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'pnpm run dev',
    reuseExistingServer: !process.env.CI,
    cwd: '../',
    url: 'http://localhost:3000',
    timeout: 30 * 1000, // 30 sec – bump if your build is slow
  },
})
