import { Concert } from "../concert/index.js";
import type { ConcertsProps } from "./concertsPage.types.js";
import { LoadMoreConcerts } from "../loadMoreConcerts/index.js";
import { UpcomingConcerts } from "../upcomingConcerts/upcoming.jsx";
import classNames from "classnames";
import { pastConcerts } from "./pastConcerts.js";
import styles from "./styles.module.scss";

export const Concerts = ({ concertData, first, numberOfConcerts }: ConcertsProps) => (
  <div className={classNames(styles.concerts)}>
    <UpcomingConcerts concertData={concertData} />
    {pastConcerts({ concerts: concertData }).map((concert) => {
      return <Concert key={concert.id} id={concert.id} />;
    })}

    <LoadMoreConcerts initialSkip={first} numberOfConcerts={numberOfConcerts} />
  </div>
);
