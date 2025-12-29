import type { Location } from '../../types/location.js'
import type { LocationFragment } from '../../generated/graphql.js'
import { locationArraySchema } from '../schemas.js'

export const locationsFormatter = (fragment: LocationFragment[]): Location[] =>
  locationArraySchema.parse(
    fragment.map((location) => ({
      id: location?.id ?? '',
      title: location?.title ?? null,
      address: location.addressTitle ?? null,
      lat: location?.address?.latitude ?? null,
      lng: location?.address?.longitude ?? null,
      startTime: null,
      ticketLink: null,
    }))
  )
