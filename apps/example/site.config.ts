import { defineSiteConfig } from "@mono/site-config";

/*
 * Everything that makes this site this brand. See SiteConfigInput in
 * @mono/site-config for all options and their defaults. This example uses
 * the neutral default theme and only sets a logo.
 */
export const siteConfig = defineSiteConfig({
  name: "Example",
  url: "https://www.example.nl",
  locale: "en",
  logo: { src: "/img/logo.svg", alt: "Example", width: 175, height: 40 },
});
