import type { Metadata, Viewport } from 'next'
import { ConcertsPage } from '@mono/components'
import React from 'react'
import { getPageSeo } from '@mono/data'
import { viewport } from '@mono/utils'

const pageSlug = 'concerten'

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: pageSlug })
  return data
}

export function generateViewport(): Viewport {
  return viewport
}

const Page = () => <ConcertsPage />

export default Page
