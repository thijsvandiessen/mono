import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { headerBody } from './headerBody'

export const header = gql`
  fragment header on HeaderRecord {
    ...identifiable
    body {
      ...headerBody
    }
    cover
  }
  ${headerBody}
  ${identifiable}
`
