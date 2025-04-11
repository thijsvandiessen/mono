import type { Metadata, Viewport } from 'next'
import { DefaultPage } from '@mono/components/src/defaultPage'
import React from 'react'
import { getPageSeo } from '@mono/data'
import { viewport } from '@mono/utils'

const homepageSlug = 'homepage'
export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: homepageSlug })
  return data
}

export function generateViewport(): Viewport {
  return viewport
}

const Page = () => {
  return <DefaultPage slug={homepageSlug} />
}

export default Page
