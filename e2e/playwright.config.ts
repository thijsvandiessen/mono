import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Run all tests in parallel.
  fullyParallel: true,

  use: {
    baseURL: 'http://127.0.0.1:4000',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'pnpm exec turbo dev --filter=@mono/lundi-bleu...',
    reuseExistingServer: false,
    cwd: '../',
    url: 'http://127.0.0.1:4000',
    timeout: 30 * 1000,
  },
})
