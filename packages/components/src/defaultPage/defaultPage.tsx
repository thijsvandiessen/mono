import { PageContent } from '../pageContent'
import React from 'react'
import { getPage } from '@mono/data'
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
