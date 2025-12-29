import type { GetConcertsUrlsQuery } from '../../generated/graphql.js'
import type { PageLink } from '../../types/pageLink.js'
import { pageLinkArraySchema } from '../schemas.js'
import { slugFormatter } from '@mono/utils'

export const concertUrlFormatter = (
  concerts: GetConcertsUrlsQuery['allConcerts'],
  prefix: string
) =>
  pageLinkArraySchema.parse(
    concerts.reduce((prev: PageLink[], currentValue) => {
      if (!currentValue.slug) return prev
      if (!currentValue.title) return prev

      prev.push({
        title: currentValue.title,
        url: slugFormatter({ slug: currentValue.slug, prefix }),
        updatedAt: new Date(currentValue._updatedAt),
      })

      return prev
    }, [])
  )
