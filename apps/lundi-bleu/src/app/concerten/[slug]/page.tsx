import { EventPage } from '@mono/components/src/eventPage'
import { getEventPageSeo } from '@mono/datocms'
import type { Metadata, Viewport } from 'next'
import { viewport } from '@mono/utils'

interface PageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string[] | undefined }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const { data } = await getEventPageSeo({ slug })
  return data
}

export function generateViewport(): Viewport {
  return viewport
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  return <EventPage slug={slug} />
}

export default Page
