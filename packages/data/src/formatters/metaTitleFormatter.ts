import type {
  ConcertPageSeoFragment,
  PageDetailSeoFragment,
} from '../generated/graphql.js'
import type { SiteMetadata } from './siteMetadata/metadata.type.js'
import { z } from 'zod'

const metaTitleSchema = z.string()

export const metaTitleFormatter = (
  data: PageDetailSeoFragment | ConcertPageSeoFragment | undefined | null,
  metadata: SiteMetadata
) => {
  const defaultSiteName = metadata?.title || ''

  if (!defaultSiteName) {
    return metaTitleSchema.parse(data?.seo?.title || data?.title || '')
  }
  if (data?.seo?.title) {
    return metaTitleSchema.parse(`${data.seo.title} | ${defaultSiteName}`)
  }
  if (data?.title === 'homepage') {
    return metaTitleSchema.parse(defaultSiteName)
  }
  if (data?.title) {
    return metaTitleSchema.parse(`${data.title} | ${defaultSiteName}`)
  }

  return metaTitleSchema.parse(defaultSiteName)
}
