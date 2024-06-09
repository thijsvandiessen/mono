import { cacheExchange } from '@urql/exchange-graphcache'
import introspectedSchema from './generated/introspection.json'
import type { Exchange } from '@urql/core'

/*
 * These objects do not have an id.
 * so it is difficult to see if it is cachable.
 * It is also possible to create a cachable key from the response.
 * https://formidable.com/open-source/urql/docs/graphcache/normalized-caching
 */

export default cacheExchange({
  schema: introspectedSchema,
  keys: {
    LocationRecord: () => null,
    VideoField: () => null,
    CollectionMetadata: () => null,
    ConcertRecord: () => null,
    SeoField: () => null,
    Tag: () => null,
    LatLonField: () => null,
    TwoColumnModelRightContentField: () => null,
    TwoColumnModelLeftContentField: () => null,
    TextBlockModelContentField: () => null,
    HeaderModelBodyField: () => null,
  },
}) as Exchange
