import { Client, fetchExchange, mapExchange } from '@urql/core'
import cacheExchange from './cacheExchange'
import { linkConfig } from './linkConfig'
import { retryExchange } from '@urql/exchange-retry'
import { retryExchangeOptions } from './retryExchange'

export const client = new Client({
  url: linkConfig.url,
  exchanges: [
    cacheExchange,
    retryExchange(retryExchangeOptions),
    mapExchange({
      onError(error) {
        console.log(error, error.graphQLErrors[0]?.extensions)
      },
    }),
    fetchExchange,
  ],
  fetchOptions: () => {
    return {
      headers: { ...linkConfig.headers },
      next: { revalidate: 3600 },
    }
  },
  suspense: true,
})
