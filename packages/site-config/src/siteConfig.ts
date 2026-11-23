import { type Locale, defaultLanguageTags, locales } from "./locales.js";

/** What a site writes in its `site.config.ts`. Everything optional has a default. */
export interface SiteConfigInput {
  /** Brand name, used in the web app manifest. */
  name: string;
  /** Canonical origin of the production site, for example `https://www.example.com`. */
  url: string;
  /** Short description, used in the web app manifest. */
  description?: string;
  /** Language of the UI texts. Defaults to `nl`. */
  locale?: Locale;
  /** Regional language tag, for example `en-US`. Defaults to one that matches `locale`. */
  languageTag?: string;
  /** IANA time zone dates are shown in. Defaults to `Europe/Amsterdam`. */
  timeZone?: string;
  /** Path (relative to `public/`) of the favicon. Defaults to `/favicon.ico`. */
  favicon?: string;
  /** Paths search engines should not index. Defaults to the style guide. */
  disallow?: string[];
}

export interface SiteConfig extends Required<Omit<SiteConfigInput, "description">> {
  description: string;
  /** Host of `url`, for example `www.example.com`. */
  domain: string;
}

export const defineSiteConfig = (input: SiteConfigInput): SiteConfig => {
  const locale = input.locale ?? "nl";
  if (!locales.includes(locale)) {
    throw new Error(`Unsupported locale "${locale}", use one of: ${locales.join(", ")}`);
  }

  let url: URL;
  try {
    url = new URL(input.url);
  } catch {
    throw new Error(`The site url "${input.url}" is not an absolute URL`);
  }

  return {
    name: input.name,
    description: input.description ?? "",
    url: url.origin,
    domain: url.host,
    locale,
    languageTag: input.languageTag ?? defaultLanguageTags[locale],
    timeZone: input.timeZone ?? "Europe/Amsterdam",
    favicon: input.favicon ?? "/favicon.ico",
    disallow: input.disallow ?? ["/style-guide"],
  };
};
