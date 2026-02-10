import { Image, notFound } from '@mono/next-js'
import { ConcertListItem } from '../concertListItem/index.js'
import { LocationDetail } from '../locationDetail/index.js'
import { PageContent } from '../pageContent/index.js'
import classNames from 'classnames'
import { getConcertPage } from '@mono/data'

import styles from './styles.module.scss'

export interface Props {
  slug: string
}

export const ConcertPage = async ({ slug }: Props) => {
  const { data } = await getConcertPage({ slug })
  if (!data) return notFound()

  return (
    <article className={styles.root}>
      <header className={classNames(styles.header)}>
        <h1 className={classNames(styles.headerTitle)}>{data.title}</h1>
      </header>
      <div
        className={classNames(styles.container, {
          [`${styles.noGrid}`]: !data.image?.url,
        })}
      >
        <aside className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            {data.image?.url && (
              <div className={classNames(styles.imageContainer)}>
                <Image
                  className={classNames(styles.image)}
                  src={data.image.url}
                  alt={data.image.description}
                  width={data.image.width ?? 100}
                  height={data.image.height ?? 100}
                  loading="eager"
                />
              </div>
            )}
          </div>
        </aside>
        <div className={styles.content}>
          {data.locations.length > 0 && (
            <div className={styles.concertListItem}>
              <ConcertListItem
                data={data}
                size="large"
                isLast={true}
                title={
                  data.locations.some((item) => item.id) ? 'Agenda' : undefined
                }
                showLink={false}
                showImage={false}
                showProgram={false}
              />
            </div>
          )}

          <PageContent pageTitle={data.title} items={data.content} />
        </div>
      </div>
      <div className={styles.locations}>
        {data.locations.map((location) => {
          if (!location?.id || !location.startTime) return null
          return (
            <LocationDetail
              key={location.id}
              id={location.id}
              startTime={location.startTime}
            />
          )
        })}
      </div>
    </article>
  )
}
