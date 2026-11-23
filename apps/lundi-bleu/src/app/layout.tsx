import React, { type ReactNode } from "react";
import { getGeneralInfo, getSiteMetadata } from "@mono/data";
import { Body } from "@mono/components";
import { siteConfig } from "../../site.config";

interface Props {
  children: ReactNode;
}

const RootLayout = async ({ children }: Props) => {
  const { data } = await getGeneralInfo();
  const { metadata } = await getSiteMetadata();

  return (
    <html lang={siteConfig.languageTag}>
      <Body navigationData={data} metadata={metadata}>
        {children}
      </Body>
    </html>
  );
};

export default RootLayout;
