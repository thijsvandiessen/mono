import type { Concert } from "../../types/concert.js";
import type { ConcertDetailFragment } from "../../generated/graphql.js";
import { concertFormatter } from "./concert.js";
import { concertsSchema } from "../schemas.js";

export const concertsFormatter = (concerts: ConcertDetailFragment[]): Concert[] =>
  concertsSchema.parse(
    concerts.reduce((prevValue: Concert[], currentConcert) => {
      /*
       * One concert that cannot be formatted should not empty the whole list,
       * so skip it instead of letting the error bubble up to the getter.
       */
      try {
        const concert = concertFormatter(currentConcert);

        if (concert?.id) {
          prevValue.push(concert);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(`Could not format concert ${currentConcert.id}: ${error.message}`);
        }
      }

      return prevValue;
    }, []),
  );
