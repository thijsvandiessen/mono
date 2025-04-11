import { type TypedDocumentNode, gql } from '@urql/core'
import { textBlock, twoColum } from './textBlock'
import type { ConcertDetailFragment } from '../generated/graphql'
import { header } from './header'
import { identifiable } from './identifiable'
import { locationItem } from './locationItem'

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
