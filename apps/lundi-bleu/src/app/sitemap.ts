import {
  type PageLink,
  getConcertUrls,
  getConcertsMeta,
  getPages,
  getPagesMeta,
} from '@mono/data'

const URL = 'https://lundi-bleu.nl'

export default async function sitemap() {
  const pagesMeta = await getPagesMeta()
  const concertsMeta = await getConcertsMeta()

  const pageCount = pagesMeta.data?.count ?? 0
  const concertCount = concertsMeta.data?.count ?? 0

  const pages: PageLink[] = []

  for (let step = 0; step < pageCount; step += 100) {
    const { data } = await getPages({ skip: step, first: 100 })

    data?.map((item) => {
      pages.push(item)
    })
  }

  for (let step = 0; step < concertCount; step += 100) {
    const { data } = await getConcertUrls({ skip: step, first: 100 })
    data?.map((item) => {
      pages.push(item)
    })
  }

  return pages.map(({ url, updatedAt }) => ({
    url: `${URL}${url}` as const,
    lastModified: new Date(updatedAt).toISOString(),
  }))
}
