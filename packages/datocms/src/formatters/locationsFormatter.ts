import type { Location } from '../types/location'
import type { LocationFragment } from '../generated/graphql'

export const locationsFormatter = (locations: LocationFragment[]): Location[] =>
  locations.map((location) => ({
    title: location?.title ?? '',
    address: location.addressTitle ?? '',
    lat: location?.address?.latitude,
    lng: location?.address?.longitude,
    id: location?.id ?? '',
  }))
