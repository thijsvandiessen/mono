import { liteClient } from 'algoliasearch/lite'
type Client = ReturnType<typeof liteClient>

if (!process.env.ALGOLIA_APPLICATION_ID || !process.env.ALGOLIA_API_KEY) {
  throw new Error('Missing Algolia credentials')
}

const appId = process.env.ALGOLIA_APPLICATION_ID
const apiKey = process.env.ALGOLIA_API_KEY

export const searchClient: Client = liteClient(appId, apiKey)
