/*
 * A small stand-in for the DatoCMS GraphQL API.
 *
 * It executes the real queries from @mono/data against the real schema
 * (packages/data/src/generated/schema.graphql), but resolves them with the
 * fixtures in ./fixtures.ts. Point the apps at it with
 * NEXT_PUBLIC_DATOCMS_GRAPHQL_URL=http://127.0.0.1:4010/
 */
import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { buildSchema, graphql } from "graphql";
import { readFileSync } from "node:fs";
import { concerts, general, locations, pages, site } from "./fixtures.ts";

const port = Number(process.env.MOCK_GRAPHQL_PORT ?? 4010);

const schemaSource = readFileSync(
  new URL("../../packages/data/src/generated/schema.graphql", import.meta.url),
  "utf8",
);
const schema = buildSchema(schemaSource);

type Item = Record<string, unknown>;
type Filter = Record<string, { eq?: unknown; gt?: unknown } | undefined> | undefined;
interface ListArgs {
  first?: number;
  skip?: number;
  orderBy?: string | string[] | null;
  filter?: Filter;
}

const matches = (item: Item, filter: Filter) =>
  Object.entries(filter ?? {}).every(([field, condition]) => {
    if (!condition) return true;
    if ("eq" in condition) return item[field] === condition.eq;
    return true;
  });

const findOne = (items: Item[], { filter }: { filter?: Filter }) =>
  items.find((item) => matches(item, filter)) ?? null;

const order = (items: Item[], orderBy: ListArgs["orderBy"]) => {
  const [first] = [orderBy ?? []].flat();
  const match = first?.match(/^(.+)_(ASC|DESC)$/);
  if (!match) return items;
  const [, field = "", direction] = match;
  const sorted = [...items].sort((a, b) =>
    String(a[field] ?? "").localeCompare(String(b[field] ?? ""), undefined, { numeric: true }),
  );
  return direction === "DESC" ? sorted.reverse() : sorted;
};

const findAll = (items: Item[], { first = 20, skip = 0, orderBy, filter }: ListArgs) =>
  order(
    items.filter((item) => matches(item, filter)),
    orderBy,
  ).slice(skip, skip + first);

const rootValue = {
  _site: () => site,
  general: () => general,
  page: (args: { filter?: Filter }) => findOne(pages, args),
  allPages: (args: ListArgs) => findAll(pages, args),
  _allPagesMeta: () => ({ count: pages.length }),
  concert: (args: { filter?: Filter }) => findOne(concerts, args),
  allConcerts: (args: ListArgs) => findAll(concerts, args),
  _allConcertsMeta: () => ({ count: concerts.length }),
  location: (args: { filter?: Filter }) => findOne(locations, args),
  allLocations: (args: ListArgs) => findAll(locations, args),
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const readBody = async (request: IncomingMessage) => {
  const chunks: Buffer[] = [];
  for await (const chunk of request) chunks.push(chunk as Buffer);
  return Buffer.concat(chunks).toString("utf8");
};

const send = (response: ServerResponse, status: number, body: unknown) => {
  response.writeHead(status, { "Content-Type": "application/json", ...corsHeaders });
  response.end(JSON.stringify(body));
};

const server = createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    response.writeHead(204, corsHeaders);
    response.end();
    return;
  }

  // Used by Playwright to know when the server is ready.
  if (request.method === "GET" && request.url === "/healthcheck") {
    send(response, 200, { status: "ok" });
    return;
  }

  try {
    let query: string | undefined;
    let variables: Record<string, unknown> | undefined;
    let operationName: string | undefined;

    if (request.method === "GET") {
      const url = new URL(request.url ?? "/", `http://${request.headers.host}`);
      query = url.searchParams.get("query") ?? undefined;
      const rawVariables = url.searchParams.get("variables");
      variables = rawVariables ? JSON.parse(rawVariables) : undefined;
      operationName = url.searchParams.get("operationName") ?? undefined;
    } else {
      ({ query, variables, operationName } = JSON.parse(await readBody(request)));
    }

    if (!query) {
      send(response, 400, { errors: [{ message: "Missing query" }] });
      return;
    }

    const result = await graphql({
      schema,
      source: query,
      rootValue,
      variableValues: variables,
      operationName,
    });

    if (result.errors) {
      // The operation name comes from the request: keep the format string constant
      // and strip everything but name characters so it cannot forge log lines.
      const name = (operationName ?? "query").replace(/[^\w]/g, "");
      console.error("[mock-graphql] %s failed:", name, result.errors);
    }

    send(response, 200, result);
  } catch (error) {
    send(response, 400, { errors: [{ message: (error as Error).message }] });
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`[mock-graphql] listening on http://127.0.0.1:${port}/`);
});
