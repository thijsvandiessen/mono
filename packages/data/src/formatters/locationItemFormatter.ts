import type { Location } from '../types/location.js'
import type { LocationItemFragment } from '../generated/graphql.js'
import { locationFormatter } from './locationFormatter.js'

export const locationItemFormatter = (
  location: LocationItemFragment
): Location => {
  return {
    ...locationFormatter(location.location ?? undefined),
    startTime: location?.dateTime ?? null,
    ticketLink: location?.ticketLink ?? null,
  }
}
