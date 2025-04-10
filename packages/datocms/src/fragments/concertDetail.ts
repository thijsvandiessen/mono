import { type TypedDocumentNode, gql } from '@urql/core'
import { identifiable } from './identifiable'
import { locationItem } from './locationItem'
import { textBlock, twoColum } from './textBlock'
import { header } from './header'
import type { ConcertDetailFragment } from '../generated/graphql'

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
