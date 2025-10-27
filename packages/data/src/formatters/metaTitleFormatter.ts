import type {
  ConcertPageSeoFragment,
  PageDetailSeoFragment,
} from '../generated/graphql.js'
import { getSiteMetadata } from '../getters/getSiteMetadata.js'

export const metaTitleFormatter = async (
  data: PageDetailSeoFragment | ConcertPageSeoFragment | undefined
) => {
  const { metadata } = await getSiteMetadata()
  const defaultSiteName = metadata?.title || ''

  if (!defaultSiteName) return data?.seo?.title || data?.title || ''
  if (data?.seo?.title) return `${data.seo.title} | ${defaultSiteName}`
  if (data?.title === 'homepage') return defaultSiteName
  if (data?.title) return `${data.title} | ${defaultSiteName}`

  return defaultSiteName
}
