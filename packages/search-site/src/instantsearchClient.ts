import instantsearch from 'instantsearch.js'
import { searchClient } from './searchClient.js'

if (!process.env.ALGOLIA_INDEX_NAME)
  throw new Error('Missing Algolia index name')

export const instantsearchClient = instantsearch({
  indexName: process.env.ALGOLIA_INDEX_NAME,
  searchClient,
})
