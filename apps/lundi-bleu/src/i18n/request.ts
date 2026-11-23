import { getRequestConfig } from "next-intl/server";
import { messages } from "@mono/components";
import { siteConfig } from "../../site.config";

/*
 * next-intl request config, without i18n routing: the whole site uses the
 * locale from site.config.ts. Merge site-specific overrides into `messages`
 * here when needed.
 */
export default getRequestConfig(() => ({
  locale: siteConfig.locale,
  timeZone: siteConfig.timeZone,
  messages: messages[siteConfig.locale],
}));
