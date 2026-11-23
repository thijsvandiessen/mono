import { createManifest, createRobots } from "./metadataRoutes.js";
import { describe, expect, it } from "vitest";
import { defineSiteConfig } from "./siteConfig.js";

describe("defineSiteConfig", () => {
  it("fills in the defaults", () => {
    expect(defineSiteConfig({ name: "Acme", url: "https://www.acme.test/" })).toEqual({
      name: "Acme",
      description: "",
      url: "https://www.acme.test",
      domain: "www.acme.test",
      locale: "nl",
      languageTag: "nl-NL",
      timeZone: "Europe/Amsterdam",
      favicon: "/favicon.ico",
      disallow: ["/style-guide"],
    });
  });

  it("keeps the values a site sets", () => {
    const config = defineSiteConfig({
      name: "Acme",
      url: "https://acme.test",
      locale: "en",
      languageTag: "en-US",
      timeZone: "America/New_York",
      disallow: [],
    });
    expect(config).toEqual(
      expect.objectContaining({
        locale: "en",
        languageTag: "en-US",
        timeZone: "America/New_York",
        disallow: [],
      }),
    );
  });

  it("derives the language tag from the locale", () => {
    expect(defineSiteConfig({ name: "Acme", url: "https://acme.test", locale: "en" })).toEqual(
      expect.objectContaining({ languageTag: "en-GB" }),
    );
  });

  it("rejects a relative url", () => {
    expect(() => defineSiteConfig({ name: "Acme", url: "acme.test" })).toThrow(/absolute URL/);
  });

  it("rejects an unsupported locale", () => {
    // @ts-expect-error -- testing a value the type does not allow
    expect(() =>
      defineSiteConfig({ name: "Acme", url: "https://acme.test", locale: "fr" }),
    ).toThrow(/Unsupported locale/);
  });
});

describe("metadata routes", () => {
  const config = defineSiteConfig({ name: "Acme", url: "https://acme.test", locale: "en" });

  it("points robots at the sitemap", () => {
    expect(createRobots(config)).toEqual({
      rules: { userAgent: "*", allow: "/", disallow: ["/style-guide"] },
      sitemap: "https://acme.test/sitemap.xml",
    });
  });

  it("builds the manifest from the config", () => {
    expect(createManifest(config)).toEqual(
      expect.objectContaining({ name: "Acme", lang: "en-GB", start_url: "/" }),
    );
  });
});
