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

  if (!pageData) {
    return (
      <Events
        eventData={eventData}
        first={first}
        numberOfEvents={eventsMeta.data?.count ?? 0}
      />
    )
  }

  let header = null
  let pageContent = pageData?.content
  if (pageData?.content[0]?.__typename === 'HeaderRecord') {
    header = pageData?.content[0]
    pageContent = pageData?.content.slice(1)
  }

  return (
    <>
      {header && (
        <Header
          body={header.body}
          cover={header.cover}
          title={pageData.title || ''}
        />
      )}
      <Events
        eventData={eventData}
        first={first}
        numberOfEvents={eventsMeta.data?.count ?? 0}
      />
      <PageContent sectionClassName="content-layout" items={pageContent} />
    </>
  )
}
