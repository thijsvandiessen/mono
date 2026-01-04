import type { Location } from '../../types/location.js'
import type { LocationItemFragment } from '../../generated/graphql.js'
import { locationFormatter } from './location.js'
import { locationSchema } from '../schemas.js'

export const locationItemFormatter = (
  location: LocationItemFragment
): Location => {
  return locationSchema.parse({
    ...locationFormatter(location.location ?? undefined),
    startTime: location?.dateTime ?? null,
    ticketLink: location?.ticketLink ?? null,
  })
}
