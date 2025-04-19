import { type TypedDocumentNode, gql } from '@urql/core'
import type { HeaderFragment } from '../generated/graphql.js'
import { headerBody } from './headerBody.js'
import { identifiable } from './identifiable.js'

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
