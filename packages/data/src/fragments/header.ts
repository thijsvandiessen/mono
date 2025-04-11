import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { headerBody } from './headerBody'
import type { TypedDocumentNode } from '@urql/core'
import type { HeaderFragment } from '../generated/graphql'

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
