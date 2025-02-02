const getUrl = () => {
  if (typeof window === 'undefined')
    return 'https://current--vandiessen-mono-graph.apollographos.net/graphql' as const

  return '/graphql' as const
}

export const linkConfig = {
  url: getUrl(),
  headers: {
    'Content-Language': 'nl-NL',
    // 'apollographql-client-name': 'example',
    'apollographql-client-version': 'specific-version', // TODO: comit hash?
  },
  next: { revalidate: 3600 },
}
