import {
  ConcertModelOrderBy,
  formatCloudinaryImage,
  getConcerts,
  getConcertsMeta,
  getPage,
  isOfTypeCloudinaryAsset,
} from '@mono/data'
import { Concerts } from './concerts.jsx'
import { ContentField } from '../contentField/index.js'
import { Header } from '../header/index.js'
import { PageContent } from '../pageContent/index.js'
import { notFound } from '@mono/next-js'

export const ConcertsPage = async () => {
  const first = 10
  const { data: concertData } = await getConcerts({
    skip: 0,
    first,
    order: ConcertModelOrderBy.PositionAsc,
  })
  const concertsMeta = await getConcertsMeta()
  const { data: pageData } = await getPage({ slug: 'concerten' })

  if (!concertData && !pageData) return notFound()

  return (
    <>
      {pageData?.content[0]?.__typename === 'HeaderRecord' &&
        pageData?.content[0] && (
          <Header
            body={<ContentField data={pageData?.content[0].body} />}
            cover={formatCloudinaryImage(
              isOfTypeCloudinaryAsset(pageData?.content[0].cover)
                ? pageData?.content[0].cover
                : undefined
            )}
            title={pageData?.title ?? undefined}
          />
        )}
      <Concerts
        concertData={concertData}
        first={first}
        numberOfConcerts={concertsMeta.data?.count ?? 0}
      />
      {pageData?.content.slice(1) && (
        <PageContent
          pageTitle={pageData?.title ?? undefined}
          items={pageData?.content.slice(1)}
        />
      )}
    </>
  )
}
