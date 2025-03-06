import { liteClient } from 'algoliasearch/lite'

if (!process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || !process.env.NEXT_PUBLIC_ALGOLIA_API_KEY) {
  throw new Error('Missing Algolia credentials')
}

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY

export const searchClient = liteClient(appId, apiKey)
