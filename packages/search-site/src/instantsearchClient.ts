import instantsearch from 'instantsearch.js'
import type Client from 'instantsearch.js/es/lib/InstantSearch.js'
import { searchClient } from './searchClient.js'

if (!process.env.ALGOLIA_INDEX_NAME)
  throw new Error('Missing Algolia index name')

export const instantsearchClient: Client = instantsearch({
  indexName: process.env.ALGOLIA_INDEX_NAME,
  searchClient,
})
