import type { Locale, Messages } from "./index.js";

/*
 * Makes next-intl type-check translation keys against the catalogs in this
 * folder, see https://next-intl.dev/docs/workflows/typescript.
 */
declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: Messages;
  }
}
