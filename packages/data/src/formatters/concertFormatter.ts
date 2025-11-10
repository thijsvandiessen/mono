import type { Concert } from '../types/concert.js'
import type { ConcertDetailFragment } from '../generated/graphql.js'
import type { Location } from '../types/location.js'
import { formatCloudinaryImage } from './formatCloudinaryImage.js'
import { isOfTypeCloudinaryAsset } from '../types/image.js'
import { locationItemFormatter } from './locationItemFormatter.js'
import { slugFormatter } from '@mono/utils'

export const concertFormatter = (
  concert?: ConcertDetailFragment
): Concert | undefined => {
  if (!concert?.title) return
  if (!concert?.slug) return
  return {
    id: concert.id,
    title: concert.title,
    image: formatCloudinaryImage(
      isOfTypeCloudinaryAsset(concert.poster) ? concert.poster : undefined
    ),
    locations: concert.locations.reduce(
      (prevLocations: Location[], currentLocation) => {
        const location = locationItemFormatter(currentLocation)

        if (location && !prevLocations.find((loc) => loc.id === location.id)) {
          prevLocations.push(location)
        }

        return prevLocations
      },
      []
    ),
    url: slugFormatter({ slug: concert.slug, prefix: '/concerten' }),
    content: concert.content,
  }
}
