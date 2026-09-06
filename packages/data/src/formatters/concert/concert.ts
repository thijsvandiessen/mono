import type { Concert } from "../../types/concert.js";
import type { ConcertDetailFragment } from "../../generated/graphql.js";
import type { Location } from "../../types/location.js";
import { concertSchema } from "../schemas.js";
import { formatCloudinaryImage } from "../formatCloudinaryImage.js";
import { isOfTypeCloudinaryAsset } from "../../types/image.js";
import { locationItemFormatter } from "../location/locationItem.js";
import { slugFormatter } from "@mono/utils";

export const concertFormatter = (concert?: ConcertDetailFragment): Concert | undefined => {
  if (!concert?.title) return;
  if (!concert?.slug) return;
  return concertSchema.parse({
    id: concert.id,
    title: concert.title,
    image: formatCloudinaryImage(
      isOfTypeCloudinaryAsset(concert.poster) ? concert.poster : undefined,
    ),
    locations: concert.locations.reduce((prevLocations: Location[], currentLocation) => {
      const location = locationItemFormatter(currentLocation);

      /*
       * A concert can be played on several dates at the same venue, so both the
       * venue and the date are needed to tell two location items apart.
       */
      const isDuplicate = prevLocations.some(
        (loc) => loc.id === location.id && loc.startTime === location.startTime,
      );

      if (location && !isDuplicate) {
        prevLocations.push(location);
      }

      return prevLocations;
    }, []),
    url: slugFormatter({ slug: concert.slug, prefix: "/concerten" }),
    content: concert.content,
  });
};
