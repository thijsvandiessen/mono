import type { GetSiteMetadataQuery } from '../generated/graphql.js'

export interface social {
  name: string
  url: string
}

export interface SiteMetadata {
  base_url: string
  title: string
  description: string
  socials: social[]
}

function getSocials(data: object): social[] {
  return [
    {
      name:
        'social_one_name' in data && typeof data.social_one_name === 'string'
          ? data.social_one_name
          : '',
      url:
        'social_one_url' in data && typeof data.social_one_url === 'string'
          ? data.social_one_url
          : '',
    },
    {
      name:
        'social_two_name' in data && typeof data.social_two_name === 'string'
          ? data.social_two_name
          : '',
      url:
        'social_two_url' in data && typeof data.social_two_url === 'string'
          ? data.social_two_url
          : '',
    },
    {
      name:
        'social_three_name' in data &&
        typeof data.social_three_name === 'string'
          ? data.social_three_name
          : '',
      url:
        'social_three_url' in data && typeof data.social_three_url === 'string'
          ? data.social_three_url
          : '',
    },
    {
      name:
        'social_four_name' in data && typeof data.social_four_name === 'string'
          ? data.social_four_name
          : '',
      url:
        'social_four_url' in data && typeof data.social_four_url === 'string'
          ? data.social_four_url
          : '',
    },
  ].filter((social) => social.url || social.name)
}

export const formatSiteMetadata = (
  data?: GetSiteMetadataQuery['general']
): SiteMetadata => {
  if (!data?.siteMetadata || typeof data.siteMetadata !== 'object') {
    return { base_url: '', title: '', description: '', socials: [] }
  }

  const { siteMetadata } = data

  return {
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
  }
}
