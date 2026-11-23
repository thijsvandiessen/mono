import { Link } from "@mono/next-js";
import styles from "./notFound.module.scss";
import { useTranslations } from "next-intl";

export const NotFound = () => {
  const t = useTranslations("NotFound");
  return (
    <section className={styles.wrapper}>
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
      <p>
        <Link href="/">{t("backHome")}</Link>
      </p>
    </section>
  );
};
