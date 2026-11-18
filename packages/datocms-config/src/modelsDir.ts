import { fileURLToPath } from "node:url";

/**
 * Absolute path to `packages/datocms-config/src/models`.
 *
 * Resolved relative to this module (not the process cwd). `../src/models/`
 * works both from `src/` (running TS directly) and from the compiled `dist/`
 * output, since both directories are siblings in the package root.
 */
export const modelsDir = fileURLToPath(new URL("../src/models/", import.meta.url));
