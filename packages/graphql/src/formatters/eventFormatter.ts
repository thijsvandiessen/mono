import type { ConcertDetailFragment } from '../generated/graphql'
import type { Event } from '../types/event'
import { locationItemFormatter } from './locationItemFormatter'
import { slugFormatter } from '@mono/utils'
import { isOfTypeCloudinaryAsset } from '../types/image'
import { formatCloudinaryImage } from './formatCloudinaryImage'
import type { Location } from '../types/location'

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

        if (location) {
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
