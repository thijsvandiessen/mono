import type { Metadata, Viewport } from 'next'
import { DefaultPage } from '@mono/components'
import { getPageSeo } from '@mono/data'
import { viewport } from '@mono/utils'

interface PageProps {
  params: Promise<{ slug: string[] }>
  searchParams: Promise<{ [key: string]: string[] | undefined }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const { data } = await getPageSeo({ slug: slug.join('/') })
  return data
}

export const generateViewport = (): Viewport => viewport

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  return <DefaultPage slug={slug.join('/')} />
}

export default Page
