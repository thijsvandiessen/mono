import { type TypedDocumentNode, gql } from '@urql/core'

import { author } from './author'
import { identifiable } from './identifiable'
import { locationItem } from './locationItem'
import { textBlock, twoColum } from './textBlock'
import { header } from './header'
import { mediaItem } from './image'
import { music } from './music'

export const concertDetail: TypedDocumentNode = gql`
  fragment concertDetail on ConcertRecord {
    ...identifiable
    title
    slug
    locations {
      ...locationItem
    }
    poster {
      ...mediaItem
    }
    persons {
      ...author
    }
    program {
      ...music
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
  ${mediaItem}
  ${music}
  ${author}
  ${header}
  ${textBlock}
  ${twoColum}
`
