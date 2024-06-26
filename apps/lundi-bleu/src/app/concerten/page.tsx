import React from 'react'
import type { Metadata, Viewport } from 'next'
import { getPageSeo } from '@mono/graphql'
import { ConcertsPage } from '@mono/components/src/concertsPage'
import { viewport } from '@mono/utils'

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
