import type { NextConfig } from "next";
import { headerConfig } from "./headerConfig.js";

type Props = {
  domain: string;
};

export const customNextConfig = ({ domain }: Props): NextConfig => ({
  // Let `next dev` keep each app's AGENTS.md in sync with the installed Next.js docs.
  agentRules: true,
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: true,
  typedRoutes: true,
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  rewrites: () =>
    Promise.resolve([
      {
        source: "/graphql",
        destination: "https://graphql.datocms.com/",
      },
    ]),
  headers: () => Promise.resolve([{ source: "/(.*)", headers: headerConfig({ domain }) }]),
  allowedDevOrigins: ["127.0.0.1"],
});
