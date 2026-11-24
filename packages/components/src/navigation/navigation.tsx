import { Image, Link } from "@mono/next-js";
import { MobileMenu } from "../mobileMenu/index.js";
import { type NavigationData } from "@mono/data";
import { NavigationItem } from "../navigationItem/index.js";
import { NavigationSubMenu } from "../navigationSubMenu/index.js";
import React from "react";
import type { SiteLogo } from "@mono/site-config";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props {
  data: NavigationData;
  logo?: SiteLogo;
}

export const Navigation = ({ data, logo }: Props) => {
  return (
    <nav className={classNames(styles.root)}>
      <div className={classNames(styles.content)}>
        <MobileMenu escapedMenuString={JSON.stringify(data)} />
        {logo && (
          <Link href="/" className={classNames(styles.logoLink)}>
            <Image
              className={classNames(styles.logo)}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading="eager"
            />
          </Link>
        )}
        <ul className={classNames(styles.list)}>
          {data.menu?.map((item) => {
            if ("slug" in item && item.slug) {
              return <NavigationItem key={item.id} slug={item.slug} label={item.label} />;
            }

            if ("items" in item) {
              return (
                <NavigationSubMenu
                  key={item.id}
                  label={item.label}
                  item={JSON.stringify(item.items)}
                />
              );
            }

            return null;
          })}
        </ul>
      </div>
    </nav>
  );
};
