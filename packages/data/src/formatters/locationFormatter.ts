import type { Location } from '../types/location.js'
import type { LocationFragment } from '../generated/graphql.js'

export const locationFormatter = (location: LocationFragment): Location => ({
  id: location.id,
  title: location?.title ?? undefined,
  address: location?.addressTitle ?? undefined,
  lat: location?.address?.latitude,
  lng: location?.address?.longitude,
})
