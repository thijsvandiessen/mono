import React from 'react'
import { DefaultPage } from '@crea/components/src/defaultPage'
import { getPageSeo } from '@crea/graphql/src/getters/getPageSeo'
import type { Metadata, Viewport } from 'next'
import { viewport } from '@crea/utils/src/viewport'

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
