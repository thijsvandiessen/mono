import type { Location } from '../types/location.js'
import type { LocationFragment } from '../generated/graphql.js'

export const locationsFormatter = (locations: LocationFragment[]): Location[] =>
  locations.map((location) => ({
    id: location?.id ?? '',
    title: location?.title ?? null,
    address: location.addressTitle ?? null,
    lat: location?.address?.latitude ?? null,
    lng: location?.address?.longitude ?? null,
    startTime: null,
    ticketLink: null,
  }))
