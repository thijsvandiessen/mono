import type { Concert } from "@mono/data";
import { Concert as ConcertComponent } from "../concert/index.js";
import styles from "./styles.module.scss";
import { upcomingConcerts } from "./upcomingConcerts.js";
import { useTranslations } from "next-intl";

interface UpcomingConcertsProps {
  concertData: Concert[];
}

export const UpcomingConcerts = ({ concertData }: UpcomingConcertsProps) => {
  const t = useTranslations("UpcomingConcerts");
  const upcoming = upcomingConcerts({ concerts: concertData });

  if (upcoming.length === 0) return null;

  return (
    <div>
      <h2 className={styles.header}>{t("upcoming")}</h2>
      {upcoming.map((concert) => {
        return <ConcertComponent key={concert.id} id={concert.id} />;
      })}

      {concertData.length > upcoming.length && <h2 className={styles.header}>{t("other")}</h2>}
    </div>
  );
};
