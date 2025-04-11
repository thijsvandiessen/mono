import { type TypedDocumentNode, gql } from '@urql/core'
import type { HeaderFragment } from '../generated/graphql'
import { headerBody } from './headerBody'
import { identifiable } from './identifiable'

export const header: TypedDocumentNode<HeaderFragment> = gql`
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
