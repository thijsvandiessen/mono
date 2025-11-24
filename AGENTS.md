# Repository Guidelines

## Project Structure & Module Organization
This Turborepo keeps deployable sites in `apps/` (`lundi-bleu` is production, `example` hosts the style guide) and shared code in `packages/` (`components`, `data`, `hooks`, `utils`, and internal configs such as `eslint-config`). End-to-end Playwright specs live in `e2e/`, while Terraform and other ops assets sit in `terraform/`. Co-locate feature code with its tests and SCSS under each package’s `src/` folder so tree-shaking and story imports stay predictable.

## Build, Test, and Development Commands
- `pnpm dev` – runs TypeScript in watch mode and starts both Next.js apps via workspace filters.
- `pnpm build` – compiles every workspace (TypeScript build plus package-level builds); required before release.
- `pnpm lint` / `pnpm test` – executes ESLint and Vitest across all packages; gate PRs on both.
- `pnpm e2e` – triggers Playwright suites inside `e2e/`.
- `pnpm codegen` – refreshes GraphQL schemas and generated types; run after backend schema updates.

## Coding Style & Naming Conventions
Write modern TypeScript/React with 2-space indentation, single quotes, and module-relative imports resolved via the shared `tsconfig`. Workspace packages should remain scoped as `@mono/<name>` and Next.js pages under `apps/<site>/src/app/<route>`. Enforce formatting through Prettier (3.x) and lint through the custom `@mono/eslint-config`; avoid manual overrides unless absolutely necessary.

## Testing Guidelines
Prefer colocated Vitest specs using the `*.test.ts(x)` suffix and RTL for component coverage; snapshot files stay beside their tests under `__snapshots__/`. Keep unit tests deterministic by mocking GraphQL fetchers from `@mono/data`. For integration coverage, add Playwright specs in `e2e/tests/` with descriptive file names (e.g., `navigation.spec.ts`), and execute `pnpm e2e -- --project=chromium` before shipping UI changes.

## Commit & Pull Request Guidelines
Follow Conventional Commits as seen in `git log` (`chore(deps): …`, `feat: …`, etc.) so automated changelog tooling remains coherent. Each commit should encapsulate one logical change plus updated snapshots or schema artifacts. PRs must describe the motivation, link to any issue/ticket, list how to validate (`pnpm lint && pnpm test`), and attach UI screenshots when altering visual components. Ensure reviewers can run locally by noting any new env vars or scripts.

## GraphQL & Configuration Tips
GraphQL schemas are proxied through Apollo Studio; authenticate once via `rover config auth` or export `$APOLLO_KEY` before running `pnpm codegen`. Only merge code that targets a schema already published to Apollo so generated types stay in sync with production. Coordinate Rover admin access with Thijs van Diessen for new contributors.
