import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/vitest.setup.ts"],
    exclude: [...configDefaults.exclude, "dist/**"],
    pool: "threads",
    isolate: true,
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@mono/data": path.resolve(__dirname, "../data/src"),
    },
  },
});
