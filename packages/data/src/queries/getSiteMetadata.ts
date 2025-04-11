import type {
  GetSiteMetadataQuery,
  GetSiteMetadataQueryVariables,
} from '../generated/graphql'
import type { TypedDocumentNode } from '@urql/core'
import { gql } from '@urql/core'
import { siteMetadata } from '../fragments/siteMetadata'

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
