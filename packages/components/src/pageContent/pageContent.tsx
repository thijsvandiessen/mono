import {
  type Concert,
  type PageDetailFragment,
  formatCloudinaryImage,
  isOfTypeCloudinaryAsset,
} from '@mono/data'
import { ContentField } from '../contentField/index.js'
import { Header } from '../header/index.js'
import { TwoColumContentField } from '../twoColumContentField/index.js'
import classNames from 'classnames'
import styles from './styles.module.scss'

export interface Props {
  pageTitle: string | undefined
  items: Concert['content'] | PageDetailFragment['content']
}

export const PageContent = ({ items, pageTitle }: Props) => {
  return items?.map((item, index) => {
    if (item.__typename === 'TwoColumnRecord') {
      return (
        <section key={item.id} className={classNames(styles.defaultSpacing)}>
          <TwoColumContentField item={item} />
        </section>
      )
    }
    if (item.__typename === 'TextBlockRecord') {
      return (
        <section key={item.id} className={classNames(styles.defaultSpacing)}>
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
          body={<ContentField data={item.body} />}
          cover={formatCloudinaryImage(
            isOfTypeCloudinaryAsset(item.cover) ? item.cover : undefined
          )}
          tag={index > 0 ? 'section' : 'header'}
        />
      )
    }

    return <p key="never">component does not exist</p>
  })
}
