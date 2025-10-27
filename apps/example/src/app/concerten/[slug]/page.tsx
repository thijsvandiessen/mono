import type { Metadata, Viewport } from 'next'
import { ConcertPage } from '@mono/components'
import { getConcertPageSeo } from '@mono/data'
import { viewport } from '@mono/utils'

interface PageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string[] | undefined }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const { data } = await getConcertPageSeo({ slug })
  return data
}

export const generateViewport = (): Viewport => viewport

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  return <ConcertPage slug={slug} />
}

export default Page
