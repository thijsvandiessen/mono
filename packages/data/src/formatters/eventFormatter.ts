import type { ConcertDetailFragment } from '../generated/graphql.js'
import type { Event } from '../types/event.js'
import type { Location } from '../types/location.js'
import { formatCloudinaryImage } from './formatCloudinaryImage.js'
import { isOfTypeCloudinaryAsset } from '../types/image.js'
import { locationItemFormatter } from './locationItemFormatter.js'
import { slugFormatter } from '@mono/utils'

export const eventFormatter = (
  event?: ConcertDetailFragment
): Event | undefined => {
  if (!event?.title) return
  if (!event?.slug) return
  return {
    id: event.id,
    title: event.title,
    image: formatCloudinaryImage(
      isOfTypeCloudinaryAsset(event.poster) ? event.poster : undefined
    ),
    locations: event.locations.reduce(
      (prevLocations: Location[], currentLocation) => {
        const location = locationItemFormatter(currentLocation)

        if (location && !prevLocations.find((loc) => loc.id === location.id)) {
          prevLocations.push(location)
        }

        return prevLocations
      },
      []
    ),
    url: slugFormatter({ slug: event.slug, prefix: '/concerten' }),
    content: event.content,
  }
}
