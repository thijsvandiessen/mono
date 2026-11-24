import "./appConfig.js";

import { type Messages, nl } from "./nl.js";
import { en } from "./en.js";

export type { Messages };

export const locales = ["nl", "en"] as const;
export type Locale = (typeof locales)[number];

/** UI texts of @mono/components per locale. */
export const messages: Record<Locale, Messages> = { nl, en };
