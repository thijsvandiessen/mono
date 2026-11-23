import { Link } from "@mono/next-js";
import React from "react";
import classNames from "classnames";
import { slugFormatter } from "@mono/utils";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

export interface NavigationItemProps {
  slug?: string;
  label?: string;
}

export const NavigationItem = ({ slug, label }: NavigationItemProps) => {
  const t = useTranslations("Navigation");
  if (!slug) return <li className={classNames(styles.navItem)}>{t("noLink")}</li>;
  if (!label) return <li className={classNames(styles.navItem)}>{t("noLabel")}</li>;

  return (
    <li className={classNames(styles.navItem)}>
      <Link className={classNames(styles.link, "text-large")} href={slugFormatter({ slug })}>
        {label}
      </Link>
    </li>
  );
};
