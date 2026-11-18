import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: "tests",

  // Run all tests in parallel.
  fullyParallel: true,

  // CI uploads the HTML report (e2e/playwright-report/) as a build artifact.
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",

  use: {
    baseURL: "http://127.0.0.1:4000",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "pnpm --filter=@mono/lundi-bleu dev",
    reuseExistingServer: false,
    cwd: "../",
    url: "http://127.0.0.1:4000",
    timeout: 30 * 1000,
  },
});
