import "./appConfig.js";

import { type Locale, locales } from "@mono/site-config";
import { type Messages, nl } from "./nl.js";
import { en } from "./en.js";

export { type Locale, type Messages, locales };

/** UI texts of @mono/components per locale. */
export const messages: Record<Locale, Messages> = { nl, en };
