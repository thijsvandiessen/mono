import { gql } from '@urql/core'
import { identifiable } from './identifiable'

export const siteMetadata = gql`
  fragment siteMetadata on GeneralRecord {
    ...identifiable
    siteMetadata
  }
  ${identifiable}
`
