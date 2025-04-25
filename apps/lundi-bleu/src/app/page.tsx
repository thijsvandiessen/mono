import type { Metadata, Viewport } from 'next'
import { DefaultPage } from '@mono/components'
import React from 'react'
import { getPageSeo } from '@mono/data'
import { viewport } from '@mono/utils'

const homepageSlug = 'homepage'
export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: homepageSlug })
  return data
}

export const generateViewport = (): Viewport => viewport

const Page = () => <DefaultPage slug={homepageSlug} />

export default Page
