import { type TypedDocumentNode, gql } from '@urql/core'
import { textBlock, twoColum } from './textBlock.js'
import type { ConcertDetailFragment } from '../generated/graphql.js'
import { header } from './header.js'
import { identifiable } from './identifiable.js'
import { locationItem } from './locationItem.js'

export const concertDetail: TypedDocumentNode<ConcertDetailFragment> = gql`
  fragment concertDetail on ConcertRecord {
    ...identifiable
    title
    slug
    poster
    locations {
      ...locationItem
    }
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
  ${identifiable}
  ${locationItem}
  ${header}
  ${textBlock}
  ${twoColum}
`
