import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: ["packages/*/vitest.config.ts"],
    pool: "threads",
    isolate: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      reportsDirectory: "./coverage",
    },
  },
});
