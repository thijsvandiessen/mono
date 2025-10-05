import {
  ConcertModelOrderBy,
  getEvents,
  getEventsMeta,
  getPage,
} from '@mono/data'
import { Header } from '../header/index.js'
import { PageContent } from '../pageContent/index.js'
import { notFound } from '@mono/next-js'
import { Events } from './events.jsx'

export const ConcertsPage = async () => {
  const first = 10
  const { data: eventData } = await getEvents({
    skip: 0,
    first,
    order: ConcertModelOrderBy.PositionAsc,
  })
  const eventsMeta = await getEventsMeta()
  const { data: pageData } = await getPage({ slug: 'concerten' })

  if (!eventData && !pageData) return notFound()

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
      <Events
        eventData={eventData}
        first={first}
        numberOfEvents={eventsMeta.data?.count ?? 0}
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
