import type { MetadataRoute } from "next";
import type { SiteConfig } from "./siteConfig.js";

/** Contents of `app/robots.ts`. */
export const createRobots = (config: SiteConfig): MetadataRoute.Robots => ({
  rules: { userAgent: "*", allow: "/", disallow: config.disallow },
  sitemap: `${config.url}/sitemap.xml`,
});

/** Contents of `app/manifest.ts`. */
export const createManifest = (config: SiteConfig): MetadataRoute.Manifest => ({
  name: config.name,
  short_name: config.name,
  description: config.description,
  lang: config.languageTag,
  start_url: "/",
  display: "browser",
  icons: [{ src: config.favicon, sizes: "any" }],
});
