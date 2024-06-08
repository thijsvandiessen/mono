import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { textBlock, twoColum } from './textBlock'
import { header } from './header'
import type { TypedDocumentNode } from '@urql/core'
import type { PageDetailFragment } from '../generated/graphql'

export const pageDetail: TypedDocumentNode<PageDetailFragment> = gql`
  fragment pageDetail on PageRecord {
    ...identifiable
    title
    slug
    content {
      ... on HeaderRecord {
        ...header
      }
      ... on TextBlockRecord {
        ...textBlock
      }
      ... on TwoColumnRecord {
        ...twoColum
      }
    }
  }
  ${header}
  ${identifiable}
  ${textBlock}
  ${twoColum}
`
