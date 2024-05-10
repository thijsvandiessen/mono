const getUrl = () => {
  if (typeof window === 'undefined')
    return 'https://current--vandiessen-mono.apollographos.net/graphql' as const

  return '/graphql' as const
}

export const linkConfig = {
  url: getUrl(),
  headers: {
    'Content-Language': 'nl-NL',
    // 'apollographql-client-name': 'crea-public',
    'apollographql-client-version': 'specific-version', // TODO: comit hash?
  },
  next: { revalidate: 60, tags: ['content'] },
}
