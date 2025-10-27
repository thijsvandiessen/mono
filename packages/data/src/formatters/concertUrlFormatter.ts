import type { GetConcertsUrlsQuery } from '../generated/graphql.js'
import type { PageLink } from '../types/pageLink.js'
import { slugFormatter } from '@mono/utils'

export const concertUrlFormatter = (
  concerts: GetConcertsUrlsQuery['allConcerts']
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
