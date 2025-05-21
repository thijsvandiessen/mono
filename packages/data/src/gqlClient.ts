import { Client, fetchExchange, mapExchange } from '@urql/core'
import cacheExchange from './cacheExchange.js'
import { linkConfig } from './linkConfig.js'
import { retryExchange } from '@urql/exchange-retry'
import { retryExchangeOptions } from './retryExchange.js'

export const client = new Client({
  url: linkConfig.url,
  exchanges: [
    cacheExchange,
    retryExchange(retryExchangeOptions),
    mapExchange({
      onError(error) {
        console.log(error)
      },
    }),
    fetchExchange,
  ],
  fetchOptions: () => ({
    headers: linkConfig.headers,
    next: { revalidate: 3600 },
  }),
  suspense: true,
})
