import createNextIntlPlugin from "next-intl/plugin";
import { customNextConfig } from "@mono/next-js";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig = customNextConfig({
  domain: "www.lundi-bleu.nl",
});

export default withNextIntl(nextConfig);
