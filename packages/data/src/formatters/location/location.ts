import type { Location } from '../../types/location.js'
import type { LocationFragment } from '../../generated/graphql.js'
import { locationSchema } from '../schemas.js'

export const locationFormatter = (
  location: LocationFragment | undefined
): Location =>
  locationSchema.parse({
    id: location?.id,
    title: location?.title ?? null,
    address: location?.addressTitle ?? null,
    lat: location?.address?.latitude ?? null,
    lng: location?.address?.longitude ?? null,
    startTime: null,
    ticketLink: null,
  })
