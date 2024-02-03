import { gql } from '@urql/core'
import { identifiable } from './identifiable'

export const pageLink = gql`
  fragment pageLink on PageRecord {
    ...identifiable
    title
    slug
  }
  ${identifiable}
`
