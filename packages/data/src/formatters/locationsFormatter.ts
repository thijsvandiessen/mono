import type { Location } from '../types/location.js'
import type { LocationFragment } from '../generated/graphql.js'

export const locationsFormatter = (locations: LocationFragment[]): Location[] =>
  locations.map((location) => ({
    title: location?.title ?? '',
    address: location.addressTitle ?? '',
    lat: location?.address?.latitude,
    lng: location?.address?.longitude,
    id: location?.id ?? '',
  }))
