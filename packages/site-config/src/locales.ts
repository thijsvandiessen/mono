/** Languages the UI texts of @mono/components are available in. */
export const locales = ["nl", "en"] as const;
export type Locale = (typeof locales)[number];

/** The regional language tag used for `<html lang>`, `og:locale` and dates. */
export const defaultLanguageTags: Record<Locale, string> = {
  nl: "nl-NL",
  en: "en-GB",
};
