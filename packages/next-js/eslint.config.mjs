import { defineConfig, eslintConfig, globalIgnores, recommended } from "@mono/eslint-config";

import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  globalIgnores(["dist/*", "node_modules"]),
  eslintConfig,
  ...recommended,
  ...nextVitals,
]);
