import createNextIntlPlugin from "next-intl/plugin";
import { customNextConfig } from "@mono/next-js";
import { siteConfig } from "./site.config";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig = customNextConfig({
  domain: siteConfig.domain,
});

export default withNextIntl(nextConfig);
