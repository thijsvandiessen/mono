import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { tag } from './tag'
import { textBlock, twoColum } from './textBlock'
import { header } from './header'
import type { TypedDocumentNode } from '@urql/core'
import type { PageFragment } from '../generated/graphql'

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
