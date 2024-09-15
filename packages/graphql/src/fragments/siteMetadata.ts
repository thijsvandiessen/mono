import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import type { TypedDocumentNode } from '@urql/core'
import type { SiteMetadataFragment } from '../generated/graphql'

export const siteMetadata: TypedDocumentNode<SiteMetadataFragment> = gql`
  fragment siteMetadata on GeneralRecord {
    ...identifiable
    title
    siteMetadata
  }
  ${identifiable}
`
