import type { Location } from '../types/location.js'
import type { LocationItemFragment } from '../generated/graphql.js'
import { locationFormatter } from './locationFormatter.js'

export const locationItemFormatter = (
  location: LocationItemFragment
): Location | undefined => {
  if (!location.location?.id) return
  return {
    ...locationFormatter(location.location),
    startTime: location.dateTime ?? undefined,
    ticketLink: location.ticketLink ?? undefined,
  }
}
