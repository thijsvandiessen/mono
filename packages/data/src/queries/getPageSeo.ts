import type {
  GetPageSeoQuery,
  GetPageSeoQueryVariables,
} from '../generated/graphql'
import { type TypedDocumentNode, gql } from '@urql/core'
import { pageDetailSeo } from '../fragments/pageDetailSeo'

export const GET_PAGE_SEO: TypedDocumentNode<
  GetPageSeoQuery,
  GetPageSeoQueryVariables
> = gql`
  query getPageSeo($slug: String!) {
    page(filter: { slug: { eq: $slug } }) {
      ...pageDetailSeo
    }
  }
  ${pageDetailSeo}
`
