import { type TypedDocumentNode, gql } from '@urql/core'
import { textBlock, twoColum } from './textBlock'
import type { PageDetailFragment } from '../generated/graphql'
import { header } from './header'
import { identifiable } from './identifiable'

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
