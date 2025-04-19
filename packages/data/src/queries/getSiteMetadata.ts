import type {
  GetSiteMetadataQuery,
  GetSiteMetadataQueryVariables,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'
import { siteMetadata } from '../fragments/siteMetadata.js'

export const GET_SITE_METADATA: TypedDocumentNode<
  GetSiteMetadataQuery,
  GetSiteMetadataQueryVariables
> = gql`
  query getSiteMetadata {
    general {
      ...siteMetadata
    }
  }
  ${siteMetadata}
`
