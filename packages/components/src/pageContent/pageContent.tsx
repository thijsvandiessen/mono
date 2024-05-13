import classNames from 'classnames'
import { Fragment } from 'react'
import { type Event } from '@mono/graphql/src/types/event'
import { type PageDetailFragment } from '@mono/graphql/src/generated/graphql'
import { ContentField } from '../contentField'
import { TwoColumContentField } from '../twoColumContentField'
import { Header } from '../header'
import styles from './styles.module.scss'

export interface Props {
  sectionClassName?: string
  pageTitle?: string
  items: Event['content'] | PageDetailFragment['content']
}

export const PageContent = ({ sectionClassName, items, pageTitle }: Props) => {
  return items?.map((item, index) => {
    let header = null
    let pageContent = null

    if (index === 0 && item.__typename !== 'HeaderRecord' && pageTitle) {
      header = (
        <Header
          key={`${item.id}-header`}
          title={pageTitle}
          tag="header"
          className={styles.header}
        />
      )
    }
    if (item.__typename === 'TwoColumnRecord') {
      pageContent = (
        <section
          key={item.id}
          className={classNames(styles.defaultSpacing, sectionClassName)}
        >
          <TwoColumContentField item={item} />
        </section>
      )
    }
    if (item.__typename === 'TextBlockRecord') {
      pageContent = (
        <section
          key={item.id}
          className={classNames(styles.defaultSpacing, sectionClassName)}
        >
          <ContentField data={item.content} />
        </section>
      )
    }
    if (item.__typename === 'HeaderRecord') {
      pageContent = (
        <Header
          className={classNames({
            [`${styles.headerSpacing}`]: index > 0,
            [`${styles.header}`]: index === 0,
          })}
          key={item.id}
          title={index === 0 ? pageTitle : undefined}
          body={item.body}
          // cover={item.cover}
          tag={index > 0 ? 'section' : 'header'}
        />
      )
    }
    return (
      <Fragment key={pageTitle}>
        {header}
        {pageContent}
      </Fragment>
    )
  })
}
