import { type TypedDocumentNode, gql } from '@urql/core'
import type { SiteMetadataFragment } from '../generated/graphql'
import { identifiable } from './identifiable'

export const siteMetadata: TypedDocumentNode<SiteMetadataFragment> = gql`
  fragment siteMetadata on GeneralRecord {
    ...identifiable
    title
    siteMetadata
  }
  ${identifiable}
`
