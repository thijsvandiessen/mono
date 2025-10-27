const getUrl = () => {
  if (typeof globalThis.window !== 'undefined') {
    return '/graphql' as const
  }
  return 'https://current--vandiessen-mono-graph.apollographos.net/graphql' as const
}
const clientName = process.env.NEXT_PUBLIC_SITE_NAME ?? ''

export const linkConfig = {
  url: getUrl(),
  headers: {
    'Content-Language': 'nl-NL',
    'content-type': 'application/json',
    'apollographql-client-name': clientName,
    'apollographql-client-version': 'specific-version', // TODO: commit hash?
  },
}
