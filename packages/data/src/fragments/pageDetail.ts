import { type TypedDocumentNode, gql } from '@urql/core'
import { textBlock, twoColum } from './textBlock.js'
import type { PageDetailFragment } from '../generated/graphql.js'
import { header } from './header.js'
import { identifiable } from './identifiable.js'

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
