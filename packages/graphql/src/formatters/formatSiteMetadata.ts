export interface siteMetadata {
  base_url: string
  title: string
  description: string
}

export const formatSiteMetadata = (data?: unknown): siteMetadata => {
  if (!data || typeof data !== 'object') {
    return { base_url: '', title: '', description: '' }
  }

  return {
    base_url: 'base_url' in data ? String(data.base_url) : '',
    title: 'title' in data ? String(data.title) : '',
    description: 'description' in data ? String(data.description) : '',
  }
}
