import type {
  EventPageSeoFragment,
  PageDetailSeoFragment,
} from '../generated/graphql'
import { getSiteMetadata } from '../getters/getSiteMetadata'

export const metaTitleFormatter = async (
  data: PageDetailSeoFragment | EventPageSeoFragment | undefined
) => {
  const { metadata } = await getSiteMetadata()
  const defaultSiteName = metadata?.title || ''

  if (!defaultSiteName) return data?.seo?.title || data?.title || ''
  if (data?.seo?.title) return `${data.seo.title} | ${defaultSiteName}`
  if (data?.title === 'homepage') return defaultSiteName
  if (data?.title) return `${data.title} | ${defaultSiteName}`

  return defaultSiteName
}
