import type { Metadata, Viewport } from 'next'
import { EventPage } from '@mono/components'
import { getEventPageSeo } from '@mono/data'
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

export const generateViewport = (): Viewport => viewport

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  return <EventPage slug={slug} />
}

export default Page
