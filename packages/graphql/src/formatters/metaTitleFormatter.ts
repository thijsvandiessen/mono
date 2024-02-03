import type {
  EventPageSeoFragment,
  PageDetailSeoFragment,
} from '../generated/graphql'
import { getSiteMetadata } from '../getters/getSiteMetadata'

export const metaTitleFormatter = async (
  data: PageDetailSeoFragment | EventPageSeoFragment | undefined
) => {
  const { metadata } = await getSiteMetadata()
  const defaultTitle = metadata?.title || 'Default title'

  if (data?.seo?.title) return data.seo.title
  if (data?.title === 'homepage') return defaultTitle
  if (data?.title) return `${defaultTitle} | ${data.title}`

  return defaultTitle
}
