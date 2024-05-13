import { type TypedDocumentNode, gql } from '@urql/core'

import { identifiable } from './identifiable'
import { locationItem } from './locationItem'
import { textBlock, twoColum } from './textBlock'
import { header } from './header'

export const concertDetail: TypedDocumentNode = gql`
  fragment concertDetail on ConcertRecord {
    ...identifiable
    title
    slug
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
