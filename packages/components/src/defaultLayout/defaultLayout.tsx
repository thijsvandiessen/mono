import type { NavigationData, SiteMetadata } from "@mono/data";
import React, { type ReactNode } from "react";
import { Footer } from "../footer/index.js";
import { Navigation } from "../navigation/index.js";
import type { SiteLogo } from "@mono/site-config";
import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
  navigationData: NavigationData;
  metadata: SiteMetadata;
  logo?: SiteLogo;
};

export const DefaultLayout = ({ children, metadata, navigationData, logo }: Props) => (
  <div className={classNames(styles.main)}>
    <Navigation data={navigationData} logo={logo} />
    <main>{children}</main>
    <Footer metadata={metadata} data={navigationData} />
  </div>
);
