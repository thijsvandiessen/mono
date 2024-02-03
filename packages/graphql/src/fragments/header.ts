import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { mediaItem } from './image'
import { headerBody } from './headerBody'

export const header = gql`
  fragment header on HeaderRecord {
    ...identifiable
    body {
      ...headerBody
    }
    cover {
      ...mediaItem
    }
  }
  ${headerBody}
  ${mediaItem}
  ${identifiable}
`
