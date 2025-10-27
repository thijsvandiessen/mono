import {
  ConcertModelOrderBy,
  getConcerts,
  getConcertsMeta,
  getPage,
} from '@mono/data'
import { Header } from '../header/index.js'
import { PageContent } from '../pageContent/index.js'
import { notFound } from '@mono/next-js'
import { Concerts } from './concerts.jsx'

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
            body={pageData?.content[0].body}
            cover={pageData?.content[0].cover}
            title={pageData?.title ?? ''}
          />
        )}
      <Concerts
        concertData={concertData}
        first={first}
        numberOfConcerts={concertsMeta.data?.count ?? 0}
      />
      {pageData?.content.slice(1) && (
        <PageContent
          pageTitle={pageData?.title ?? ''}
          sectionClassName="content-layout"
          items={pageData?.content.slice(1)}
        />
      )}
    </>
  )
}
