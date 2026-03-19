const getUrl = () => {
  return 'https://graphql.datocms.com' as const
}

export const linkConfig = {
  url: getUrl(),
  headers: {
    'Content-Language': 'nl-NL',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_READONLY_TOKEN}`,
    'X-Exclude-Invalid': 'true',
    'X-Cache-Tags': 'true',
  },
}
