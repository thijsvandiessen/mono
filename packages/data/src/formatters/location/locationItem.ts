import type { Location } from "../../types/location.js";
import type { LocationItemFragment } from "../../generated/graphql.js";
import { locationFormatter } from "./location.js";
import { locationSchema } from "../schemas.js";

export const locationItemFormatter = (location: LocationItemFragment): Location => {
  /*
   * A location item can be saved without a linked location record, but it still
   * holds the date of the concert. Fall back to the id of the item itself so a
   * missing venue does not throw and take the whole concert down with it.
   */
  const linkedLocation = location.location
    ? locationFormatter(location.location)
    : { id: location.id, title: null, address: null, lat: null, lng: null };

  return locationSchema.parse({
    ...linkedLocation,
    startTime: location?.dateTime ?? null,
    ticketLink: location?.ticketLink ?? null,
  });
};
