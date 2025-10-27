import type {
  GetConcertSeoQuery,
  GetConcertSeoQueryVariables,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'
import { concertPageSeo } from '../fragments/concertPageSeo.js'

export const GET_CONCERT_SEO: TypedDocumentNode<
  GetConcertSeoQuery,
  GetConcertSeoQueryVariables
> = gql`
  query getConcertSeo($slug: String!) {
    concert(filter: { slug: { eq: $slug } }) {
      ...concertPageSeo
    }
  }
  ${concertPageSeo}
`
