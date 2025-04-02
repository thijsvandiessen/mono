import { defineConfig, loadEnv } from 'vite'
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
        name: 'search-site',
        // the proper extensions will be added
        fileName: 'search-site',
      },
    },
    plugins: [],
    define: {
      'process.env': process.env,
    },
  })
}
