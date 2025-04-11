import type { GetPagesQuery } from '../generated/graphql'
import type { PageLink } from '../types/pageLink'
import { slugFormatter } from '@mono/utils'

export const pageUrlFormatter = (pages: GetPagesQuery['allPages']) =>
  pages.reduce((prev: PageLink[], currentValue) => {
    if (!currentValue.slug) return prev
    if (!currentValue.title) return prev

    return [
      ...prev,
      {
        title: currentValue.title,
        url: slugFormatter({ slug: currentValue.slug }),
        updatedAt: new Date(currentValue._updatedAt),
      },
    ]
  }, [])
