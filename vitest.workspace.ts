import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "./packages/data/vite.config.ts",
  "./packages/hooks/vite.config.ts",
  "./packages/components/vitest.config.ts",
  "./packages/search-site/vite.config.ts",
  "./packages/utils/vite.config.ts"
])
