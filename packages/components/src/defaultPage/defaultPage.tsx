import { PageContent } from '../pageContent/index.js'
import React from 'react'
import { getPage } from '@mono/data'
import { notFound } from '@mono/next-js'
import layoutStyles from '../body/styles.module.scss'

export interface Props {
  slug: string
}

export const DefaultPage = async ({ slug }: Props) => {
  const { data } = await getPage({ slug })
  if (!data) return notFound()

  return (
    <article>
      <PageContent
        sectionClassName={layoutStyles.contentLayout}
        items={data.content}
        pageTitle={data.title || ''}
      />
    </article>
  )
}
