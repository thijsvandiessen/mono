import React from 'react'
import { PageContent } from '../pageContent'
import { getPage } from '@mono/datocms'
import { notFound } from 'next/navigation'

export interface Props {
  slug: string
}

export const DefaultPage = async ({ slug }: Props) => {
  const { data } = await getPage({ slug })
  if (!data) return notFound()

  return (
    <article>
      <PageContent
        sectionClassName="content-layout"
        items={data.content}
        pageTitle={data.title || ''}
      />
    </article>
  )
}
