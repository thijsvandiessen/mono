import { test as base, expect } from "@playwright/test";

const localHosts = new Set(["127.0.0.1", "localhost"]);

/*
 * Every test gets a browser context that only talks to this machine.
 * Requests to any other host are aborted and fail the test, so the suite
 * can never silently depend on content from outside the repository.
 */
export const test = base.extend<{ blockedRequests: string[] }>({
  blockedRequests: [
    async ({ context }, use) => {
      const blocked: string[] = [];

      await context.route("**/*", (route) => {
        const url = new URL(route.request().url());
        if (url.protocol === "data:" || url.protocol === "blob:" || localHosts.has(url.hostname)) {
          return route.continue();
        }
        blocked.push(url.href);
        return route.abort("blockedbyclient");
      });

      await use(blocked);

      expect(blocked, "the page tried to load content from outside the repo").toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };
