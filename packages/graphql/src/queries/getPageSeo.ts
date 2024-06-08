import { gql } from '@urql/core'
import type { TypedDocumentNode } from '@urql/core'

import { pageDetailSeo } from '../fragments/pageDetailSeo'
import type {
  GetPageSeoQuery,
  GetPageSeoQueryVariables,
} from '../generated/graphql'

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
