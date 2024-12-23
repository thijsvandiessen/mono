import { defineConfig, loadEnv } from 'vite'
import dts from 'vite-plugin-dts'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { config } from 'dotenv'
import path from 'node:path'

export default ({ mode }: { mode: string }) => {
  config({ path: path.resolve(process.cwd(), '.env') })
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: 'src/index.ts',
        name: 'datocms',
        // the proper extensions will be added
        fileName: 'datocms',
      },
    },
    plugins: [
      dts({ outDir: 'dist', rollupTypes: true }),
      nodePolyfills({
        overrides: {
          // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
          fs: 'memfs',
        },
        // Whether to polyfill `node:` protocol imports.
        protocolImports: true,
      }),
    ],
    define: {
      'process.env': process.env,
    },
  })
}
