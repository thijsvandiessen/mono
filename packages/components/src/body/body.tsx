import "./global.scss";
import type { NavigationData, SiteMetadata } from "@mono/data";
import React, { type ReactNode } from "react";
import { type SiteLogo, type SiteTheme, defaultTheme, themeToCss } from "@mono/site-config";
import { DefaultLayout } from "../defaultLayout/index.js";
import { NextIntlClientProvider } from "next-intl";

interface Props {
  children: ReactNode;
  navigationData: NavigationData;
  metadata: SiteMetadata;
  /** Colors and fonts, usually `siteConfig.theme`. Defaults to the neutral theme. */
  theme?: SiteTheme;
  /** Logo in the navigation, usually `siteConfig.logo`. */
  logo?: SiteLogo;
}

export const Body = ({ children, navigationData, metadata, theme = defaultTheme, logo }: Props) => (
  <body>
    {/* React hoists this into <head>. */}
    <style href="site-theme" precedence="default">
      {themeToCss(theme)}
    </style>
    {/* In a server component the provider inherits locale and messages from the app's i18n/request.ts. */}
    <NextIntlClientProvider>
      <DefaultLayout navigationData={navigationData} metadata={metadata} logo={logo}>
        {children}
      </DefaultLayout>
    </NextIntlClientProvider>
  </body>
);
