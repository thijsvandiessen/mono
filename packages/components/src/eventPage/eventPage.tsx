import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import classNames from 'classnames'
import { PageContent } from '../pageContent'
import { LocationDetail } from '../locationDetail'
import { EventListItem } from '../eventListItem'
import { getEventPage } from '@mono/graphql'

import styles from './styles.module.scss'

export interface Props {
  slug: string
}

export const EventPage = async ({ slug }: Props) => {
  const { data } = await getEventPage({ slug })
  if (!data) return notFound()

  return (
    <article className={styles.root}>
      <header className={classNames(styles.header)}>
        <div className={classNames(styles.titleContainer, 'content-layout')}>
          <h2>{data.title}</h2>
        </div>
      </header>
      <div
        className={classNames(styles.container, 'content-layout', {
          [`${styles.noGrid}`]: !data.image?.url,
        })}
      >
        <aside className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            {data.image?.url && (
              <div className={classNames(styles.imageContainer)}>
                <Image
                  priority={true} // TODO: only for the first item
                  className={classNames(styles.image)}
                  src={data.image.url}
                  alt={data.image.description}
                  width={data.image.width ?? 100}
                  height={data.image.height ?? 100}
                />
              </div>
            )}
          </div>
        </aside>
        <div className={styles.content}>
          {data.locations.length > 0 && (
            <div className={styles.eventListItem}>
              <EventListItem
                data={data}
                size="large"
                isLast={true}
                title="Agenda"
                showLink={false}
                showImage={false}
                showProgram={false}
              />
            </div>
          )}

          <PageContent
            sectionClassName={styles.pageContent}
            items={data.content}
          />
        </div>
      </div>
      <div className={styles.locations}>
        {data.locations.map((location) => {
          if (!location?.id || !location.startTime) return null
          return (
            <LocationDetail
              key={location?.id}
              id={location.id}
              startTime={location.startTime}
            />
          )
        })}
      </div>
    </article>
  )
}
