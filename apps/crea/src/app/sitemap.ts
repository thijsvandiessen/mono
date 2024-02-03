import { getEventUrls } from '@crea/graphql/src/getters/getEventUrls'
import { getEventsMeta } from '@crea/graphql/src/getters/getEventsMeta'
import { getPages } from '@crea/graphql/src/getters/getPages'
import { getPagesMeta } from '@crea/graphql/src/getters/getPagesMeta'
import { slugFormatter } from '@crea/utils/src/slugFormatter'
import type {
  EventLinkFragment,
  PageLinkFragment,
} from '@crea/graphql/src/generated/graphql'

const URL = 'https://creaorkest.nl'

export default async function sitemap() {
  const pagesMeta = await getPagesMeta()
  const eventsMeta = await getEventsMeta()

  const pageCount = pagesMeta.data?.count || 0
  const eventCount = eventsMeta.data?.count || 0

  const pages: (PageLinkFragment | EventLinkFragment)[] = []

  for (let step = 0; step < pageCount; step += 100) {
    const { data } = await getPages({ skip: step, first: 100 })

    data?.map((item) => {
      if (!item.slug) return

      item.slug = slugFormatter({ slug: item.slug })
      pages.push(item)
    })
  }

  for (let step = 0; step < eventCount; step += 100) {
    const { data } = await getEventUrls({ skip: step, first: 100 })

    data?.map((item) => {
      if (!item.slug) return

      item.slug = slugFormatter({
        slug: item.slug,
        prefix: '/concerten',
      })
      pages.push(item)
    })
  }

  const routes = pages.map(({ slug, _updatedAt }) => ({
    url: `${URL}${slug}` as const,
    lastModified: new Date(_updatedAt).toISOString(),
  }))

  return [...routes]
}
