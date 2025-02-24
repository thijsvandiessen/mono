import instantsearch from 'instantsearch.js'
import { searchClient } from './searchClient'

if (!process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME)
  throw new Error('Missing Algolia index name')

export const instantsearchClient = instantsearch({
  indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
  searchClient,
})
