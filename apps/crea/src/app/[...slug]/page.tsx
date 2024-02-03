import { DefaultPage } from '@crea/components/src/defaultPage'
import { getPageSeo } from '@crea/graphql/src/getters/getPageSeo'
import type { Metadata, Viewport } from 'next'
import { viewport } from '@crea/utils/src/viewport'

interface PageProps {
  params: { slug: string[] }
  searchParams: { [key: string]: string[] | undefined }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: params.slug.join('/') })
  return data
}

export function generateViewport(): Viewport {
  return viewport
}

const Page = ({ params: { slug } }: PageProps) => {
  return <DefaultPage slug={slug.join('/')} />
}

export default Page
