import { locale, timeZone } from "./config";
import { getRequestConfig } from "next-intl/server";
import { messages } from "@mono/components";

/*
 * next-intl request config, without i18n routing: the whole site uses one
 * locale. Merge site-specific overrides into `messages` here when needed.
 */
export default getRequestConfig(() => ({
  locale,
  timeZone,
  messages: messages[locale],
}));
