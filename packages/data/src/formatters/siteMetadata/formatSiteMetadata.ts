import type { GetSiteMetadataQuery } from '../../generated/graphql.js'
import type { SiteMetadata } from './metadata.type.js'
import { getSocials } from './getSocials.js'
import { siteMetadataSchema } from './schema.js'

export const formatSiteMetadata = (
  data?: GetSiteMetadataQuery['general']
): SiteMetadata => {
  if (!data?.siteMetadata || typeof data.siteMetadata !== 'object') {
    return siteMetadataSchema.parse({
      base_url: '',
      title: '',
      description: '',
      socials: [],
    })
  }

  const { siteMetadata } = data

  return siteMetadataSchema.parse({
    base_url:
      'base_url' in siteMetadata && typeof siteMetadata?.base_url === 'string'
        ? siteMetadata.base_url
        : '',
    title:
      'title' in siteMetadata && typeof siteMetadata.title === 'string'
        ? siteMetadata.title
        : '',
    description:
      'description' in siteMetadata &&
      typeof siteMetadata.description === 'string'
        ? siteMetadata.description
        : '',
    socials: getSocials(siteMetadata),
  })
}
