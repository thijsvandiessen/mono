import type { ConcertDetailFragment } from '../generated/graphql'
import type { Event } from '../types/event'
import { locationItemFormatter } from './locationItemFormatter'
import { slugFormatter } from '@mono/utils'
import { isOfTypeCloudinaryAsset } from '../types/image'
import { formatCloudinaryImage } from './formatCloudinaryImage'

export const eventFormatter = (
  event: ConcertDetailFragment
): Event | undefined => {
  if (!event.title) return
  if (!event.slug) return
  return {
    id: event.id,
    title: event.title,
    image: formatCloudinaryImage(
      isOfTypeCloudinaryAsset(event.poster) ? event.poster : undefined
    ),
    locations: event.locations
      .map((location) => locationItemFormatter(location))
      .filter(Boolean),
    url: slugFormatter({ slug: event.slug, prefix: '/concerten' }),
    content: event.content,
  }
}
