import { PageContent } from '../pageContent/index.js'
import { getPage } from '@mono/data'
import { notFound } from '@mono/next-js'

export interface Props {
  slug: string
}

export const DefaultPage = async ({ slug }: Props) => {
  const { data } = await getPage({ slug })
  if (!data) return notFound()

  return (
    <article>
      <PageContent items={data.content} pageTitle={data.title ?? ''} />
    </article>
  )
}
