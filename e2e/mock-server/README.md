# Mock GraphQL backend

A local stand-in for the DatoCMS GraphQL API, used by the Playwright tests in
`e2e/mock-tests/`. It runs the real queries from `@mono/data` against the real
schema (`packages/data/src/generated/schema.graphql`) and answers them with the
content in `fixtures.ts`.

```sh
pnpm build                # the app imports the built packages
pnpm e2e:mock             # starts the mock backend + the lundi-bleu app, runs the tests
pnpm --filter @mono/e2e mock-server   # only start the mock backend (port 4010)
```

The app is pointed at the mock with `NEXT_PUBLIC_DATOCMS_GRAPHQL_URL`. In the
tests, any browser request to a host other than this machine is aborted and
fails the test (see `mock-tests/fixtures.ts`).

To test new content, add it to `fixtures.ts`. Values for union or interface
fields need a `__typename`.
