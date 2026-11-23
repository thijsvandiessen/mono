import React, { type ReactNode } from "react";
import { getGeneralInfo, getSiteMetadata } from "@mono/data";
import { Body } from "@mono/components";
import { getLocale } from "next-intl/server";

interface Props {
  children: ReactNode;
}

const RootLayout = async ({ children }: Props) => {
  const { data } = await getGeneralInfo();
  const { metadata } = await getSiteMetadata();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <Body navigationData={data} metadata={metadata}>
        {children}
      </Body>
    </html>
  );
};

export default RootLayout;
