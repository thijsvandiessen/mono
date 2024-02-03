import React from 'react'
import type { Metadata, Viewport } from 'next'
import { getPageSeo } from '@crea/graphql/src/getters/getPageSeo'
import { ConcertsPage } from '@crea/components/src/concertsPage'
import { viewport } from '@crea/utils/src/viewport'

const pageSlug = 'concerten'
export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: pageSlug })
  return data
}

export function generateViewport(): Viewport {
  return viewport
}

const Page = () => {
  return <ConcertsPage />
}

export default Page
