const getUrl = () => {
  if (typeof window === 'undefined')
    return 'https://current--vandiessen-mono-graph.apollographos.net/graphql' as const

  return '/graphql' as const
}
const clientName = process.env.NEXT_PUBLIC_SITE_NAME ?? ''

export const linkConfig = {
  url: getUrl(),
  headers: {
    'Content-Language': 'nl-NL',
    'apollographql-client-name': clientName,
    'apollographql-client-version': 'specific-version', // TODO: commit hash?
  },
}
