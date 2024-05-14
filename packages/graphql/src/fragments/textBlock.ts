import { gql } from '@urql/core'
import { callToAction } from './callToAction'
import { concertLink } from './concertLink'
import { identifiable } from './identifiable'
import { pageLink } from './pageLink'
import { video } from './video'
import { document, image } from './image'

export const textBlockContent = gql`
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

export const leftContent = gql`
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

export const rightContent = gql`
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

export const textBlock = gql`
  fragment textBlock on TextBlockRecord {
    ...identifiable
    content {
      ...textBlockContent
    }
  }
  ${identifiable}
  ${textBlockContent}
`

export const twoColum = gql`
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
