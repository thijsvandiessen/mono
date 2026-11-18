import type { Concert } from "@mono/data";
import { Concert as ConcertComponent } from "../concert/index.js";
import styles from "./styles.module.scss";
import { upcomingConcerts } from "./upcomingConcerts.js";

interface UpcomingConcertsProps {
  concertData: Concert[];
}

export const UpcomingConcerts = ({ concertData }: UpcomingConcertsProps) => {
  const upcoming = upcomingConcerts({ concerts: concertData });

  if (upcoming.length === 0) return null;

  return (
    <div>
      <h2 className={styles.header}>Aankomende concerten</h2>
      {upcoming.map((concert) => {
        return <ConcertComponent key={concert.id} id={concert.id} />;
      })}

      {concertData.length > upcoming.length && <h2 className={styles.header}>Overige concerten</h2>}
    </div>
  );
};
