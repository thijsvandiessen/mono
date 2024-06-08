import { getEventUrls } from '@mono/graphql'
import { getEventsMeta } from '@mono/graphql/src/getters/getEventsMeta'
import { getPages } from '@mono/graphql/src/getters/getPages'
import { getPagesMeta } from '@mono/graphql/src/getters/getPagesMeta'
import type { PageLink } from '@mono/graphql'

const URL = 'https://lundi-bleu.nl'

export default async function sitemap() {
  const pagesMeta = await getPagesMeta()
  const eventsMeta = await getEventsMeta()

  const pageCount = pagesMeta.data?.count ?? 0
  const eventCount = eventsMeta.data?.count ?? 0

  const pages: PageLink[] = []

  for (let step = 0; step < pageCount; step += 100) {
    const { data } = await getPages({ skip: step, first: 100 })

    data?.map((item) => {
      pages.push(item)
    })
  }

  for (let step = 0; step < eventCount; step += 100) {
    const { data } = await getEventUrls({ skip: step, first: 100 })
    data?.map((item) => {
      pages.push(item)
    })
  }

  return pages.map(({ url, updatedAt }) => ({
    url: `${URL}${url}` as const,
    lastModified: new Date(updatedAt).toISOString(),
  }))
}
