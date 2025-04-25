import { type TypedDocumentNode, gql } from '@urql/core'
import { textBlock, twoColum } from './textBlock.js'
import type { PageFragment } from '../generated/graphql.js'
import { header } from './header.js'
import { identifiable } from './identifiable.js'
import { tag } from './tag.js'

export const page: TypedDocumentNode<PageFragment> = gql`
  fragment page on PageRecord {
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
  ${tag}
`
