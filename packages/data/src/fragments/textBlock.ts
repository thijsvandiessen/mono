import type {
  LeftContentFragment,
  RightContentFragment,
  TextBlockContentFragment,
  TextBlockFragment,
  TwoColumFragment,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'
import { document, image } from './image.js'
import { callToAction } from './callToAction.js'
import { concertLink } from './concertLink.js'
import { identifiable } from './identifiable.js'
import { pageLink } from './pageLink.js'
import { video } from './video.js'

export const textBlockContent: TypedDocumentNode<TextBlockContentFragment> = gql`
  fragment textBlockContent on TextBlockModelContentField {
    value
    links {
      ... on ConcertRecord {
        ...concertLink
      }
      ... on PageRecord {
        ...pageLink
      }
    }
    blocks {
      ... on VideoRecord {
        ...video
      }
      ... on DocumentRecord {
        ...document
      }
      ... on ImageRecord {
        ...image
      }
      ... on CallToActionRecord {
        ...callToAction
      }
    }
  }
  ${concertLink}
  ${pageLink}
  ${document}
  ${image}
  ${video}
  ${callToAction}
`

export const leftContent: TypedDocumentNode<LeftContentFragment> = gql`
  fragment leftContent on TwoColumnModelLeftContentField {
    value
    links {
      ... on ConcertRecord {
        ...concertLink
      }
      ... on PageRecord {
        ...pageLink
      }
    }
    blocks {
      ... on VideoRecord {
        ...video
      }
      ... on DocumentRecord {
        ...document
      }
      ... on ImageRecord {
        ...image
      }
      ... on CallToActionRecord {
        ...callToAction
      }
    }
  }
  ${concertLink}
  ${pageLink}
  ${document}
  ${image}
  ${video}
  ${callToAction}
`

export const rightContent: TypedDocumentNode<RightContentFragment> = gql`
  fragment rightContent on TwoColumnModelRightContentField {
    value
    links {
      ... on ConcertRecord {
        ...concertLink
      }
      ... on PageRecord {
        ...pageLink
      }
    }
    blocks {
      ... on VideoRecord {
        ...video
      }
      ... on DocumentRecord {
        ...document
      }
      ... on ImageRecord {
        ...image
      }
      ... on CallToActionRecord {
        ...callToAction
      }
    }
  }
  ${concertLink}
  ${pageLink}
  ${document}
  ${image}
  ${video}
  ${callToAction}
`

export const textBlock: TypedDocumentNode<TextBlockFragment> = gql`
  fragment textBlock on TextBlockRecord {
    ...identifiable
    content {
      ...textBlockContent
    }
  }
  ${identifiable}
  ${textBlockContent}
`

export const twoColum: TypedDocumentNode<TwoColumFragment> = gql`
  fragment twoColum on TwoColumnRecord {
    ...identifiable
    leftContent {
      ...leftContent
    }
    rightContent {
      ...rightContent
    }
  }
  ${identifiable}
  ${leftContent}
  ${rightContent}
`
