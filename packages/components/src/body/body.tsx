import "./global.scss";
import type { NavigationData, SiteMetadata } from "@mono/data";
import React, { type ReactNode } from "react";
import { DefaultLayout } from "../defaultLayout/index.js";
import { NextIntlClientProvider } from "next-intl";

interface Props {
  children: ReactNode;
  navigationData: NavigationData;
  metadata: SiteMetadata;
}

export const Body = ({ children, navigationData, metadata }: Props) => (
  <body>
    {/* In a server component the provider inherits locale and messages from the app's i18n/request.ts. */}
    <NextIntlClientProvider>
      <DefaultLayout navigationData={navigationData} metadata={metadata}>
        {children}
      </DefaultLayout>
    </NextIntlClientProvider>
  </body>
);
