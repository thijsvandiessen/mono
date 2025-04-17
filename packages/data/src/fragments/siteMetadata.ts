import { type TypedDocumentNode, gql } from '@urql/core'
import type { SiteMetadataFragment } from '../generated/graphql.js'
import { identifiable } from './identifiable.js'

export const siteMetadata: TypedDocumentNode<SiteMetadataFragment> = gql`
  fragment siteMetadata on GeneralRecord {
    ...identifiable
    title
    siteMetadata
  }
  ${identifiable}
`
