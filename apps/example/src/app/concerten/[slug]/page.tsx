import { EventPage } from '@mono/components/src/eventPage'
import { getEventPageSeo } from '@mono/graphql'
import type { Metadata, Viewport } from 'next'
import { viewport } from '@mono/utils'

interface PageProps {
  params: Promise<{ slug: string[] }>
  searchParams: Promise<{ [key: string]: string[] | undefined }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const { data } = await getEventPageSeo({ slug: slug.join('/') })
  return data
}

export function generateViewport(): Viewport {
  return viewport
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  return <EventPage slug={slug.join('/')} />
}

export default Page
