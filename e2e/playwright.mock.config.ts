import { defineConfig, devices } from "@playwright/test";

/*
 * Component-level browser tests that run the real Next.js app against the
 * local mock GraphQL backend in ./mock-server, so no content is loaded from
 * outside this repository.
 */
const appPort = 4001;
const mockPort = 4010;
const mockGraphqlUrl = `http://127.0.0.1:${mockPort}/`;

export default defineConfig({
  testDir: "mock-tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",

  use: {
    baseURL: `http://127.0.0.1:${appPort}`,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  webServer: [
    {
      command: "node mock-server/server.ts",
      url: `http://127.0.0.1:${mockPort}/healthcheck`,
      env: { MOCK_GRAPHQL_PORT: String(mockPort) },
      reuseExistingServer: !process.env.CI,
      timeout: 10 * 1000,
    },
    {
      command: `pnpm --filter=@mono/lundi-bleu exec next dev --turbo -p ${appPort}`,
      cwd: "../",
      url: `http://127.0.0.1:${appPort}/api/healthcheck`,
      env: {
        NEXT_PUBLIC_DATOCMS_GRAPHQL_URL: mockGraphqlUrl,
        NEXT_PUBLIC_DATOCMS_READONLY_TOKEN: "mock-token",
        NEXT_TELEMETRY_DISABLED: "1",
      },
      reuseExistingServer: !process.env.CI,
      timeout: 120 * 1000,
    },
  ],
});
