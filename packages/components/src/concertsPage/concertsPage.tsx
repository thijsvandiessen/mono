import { ConcertModelOrderBy, getEvents, getPage } from '@mono/data'
import { Event } from '../event'
import { Header } from '../header'
import { LoadMoreEvents } from '../loadMoreEvents'
import { PageContent } from '../pageContent'
import classNames from 'classnames'
import { notFound } from 'next/navigation'
import styles from './styles.module.scss'

export const ConcertsPage = async () => {
  const first = 10
  const { data: eventData } = await getEvents({
    skip: 0,
    first,
    order: ConcertModelOrderBy.PositionAsc,
  })
  const { data: pageData } = await getPage({ slug: 'concerten' })

  const events = (
    <div className={classNames(styles.concerts, 'content-layout')}>
      {eventData?.map((event) => {
        if (!event?.id) return

        return (
          <Event
            className="content-layout--small"
            key={event.id}
            id={event.id}
          />
        )
      })}

      <LoadMoreEvents initialSkip={first} />
    </div>
  )

  if (!eventData && !pageData) return notFound()

  if (!pageData) {
    return events
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
      {events}
      <PageContent sectionClassName="content-layout" items={pageContent} />
    </>
  )
}
