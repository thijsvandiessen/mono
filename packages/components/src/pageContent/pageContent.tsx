import classNames from 'classnames'
import { type Event } from '@mono/data'
import { type PageDetailFragment } from '@mono/data'
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
    if (item.__typename === 'TwoColumnRecord') {
      return (
        <section
          key={item.id}
          className={classNames(styles.defaultSpacing, sectionClassName)}
        >
          <TwoColumContentField item={item} />
        </section>
      )
    }
    if (item.__typename === 'TextBlockRecord') {
      return (
        <section
          key={item.id}
          className={classNames(styles.defaultSpacing, sectionClassName)}
        >
          <ContentField data={item.content} />
        </section>
      )
    }
    if (item.__typename === 'HeaderRecord') {
      return (
        <Header
          className={classNames({
            [`${styles.headerSpacing}`]: index > 0,
            [`${styles.header}`]: index === 0,
          })}
          key={item.id}
          title={index === 0 ? pageTitle : undefined}
          body={item.body}
          cover={item.cover}
          tag={index > 0 ? 'section' : 'header'}
        />
      )
    }

    return <p key="never">component does not exist</p>
  })
}
