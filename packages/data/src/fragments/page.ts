import { type TypedDocumentNode, gql } from '@urql/core'
import { textBlock, twoColum } from './textBlock'
import type { PageFragment } from '../generated/graphql'
import { header } from './header'
import { identifiable } from './identifiable'
import { tag } from './tag'

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
