import classNames from 'classnames'
import { notFound } from 'next/navigation'
import { Event } from '../event'
import { Header } from '../header'
import { LoadMoreEvents } from '../loadMoreEvents'
import { PageContent } from '../pageContent'
import { getEvents } from '@crea/graphql/src/getters/getEvents'
import { getPage } from '@crea/graphql/src/getters/getPage'

import styles from './styles.module.scss'

export const ConcertsPage = async () => {
  const first = 2
  const { data: eventData } = await getEvents({ skip: 0, first })
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
