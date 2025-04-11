import type { GetEventsUrlsQuery } from '../generated/graphql'
import type { PageLink } from '../types/pageLink'
import { slugFormatter } from '@mono/utils'

export const eventUrlFormatter = (
  concerts: GetEventsUrlsQuery['allConcerts']
) =>
  concerts.reduce((prev: PageLink[], currentValue) => {
    if (!currentValue.slug) return prev
    if (!currentValue.title) return prev

    return [
      ...prev,
      {
        title: currentValue.title,
        url: slugFormatter({ slug: currentValue.slug, prefix: '/concerten' }),
        updatedAt: new Date(currentValue._updatedAt),
      },
    ]
  }, [])
