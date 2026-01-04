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
