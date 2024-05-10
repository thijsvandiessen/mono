import { EventPage } from '@mono/components/src/eventPage'
import { getEventPageSeo } from '@mono/graphql/src/getters/getEventPageSeo'
import type { Metadata, Viewport } from 'next'
import { viewport } from '@mono/utils/src/viewport'

interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string[] | undefined }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { data } = await getEventPageSeo({ slug: params.slug })
  return data
}

export function generateViewport(): Viewport {
  return viewport
}

const Page = ({ params: { slug } }: PageProps) => {
  return <EventPage slug={slug} />
}

export default Page
