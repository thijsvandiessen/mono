import { gql } from '@urql/core'
import { callToAction } from './callToAction'
import { concertLink } from './concertLink'
import { eventBlock } from './eventBlock'
import { identifiable } from './identifiable'
import { document, image } from './image'
import { pageLink } from './pageLink'
import { video } from './video'

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
      ... on ConcertListRecord {
        ...eventBlock
      }
      ... on DocumentRecord {
        ...document
      }
      ... on ImageRecord {
        ...image
      }
      ... on VideoRecord {
        ...video
      }
      ... on CallToActionRecord {
        ...callToAction
      }
    }
  }
  ${concertLink}
  ${pageLink}
  ${eventBlock}
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
      ... on ConcertListRecord {
        ...eventBlock
      }
      ... on ImageRecord {
        ...image
      }
      ... on VideoRecord {
        ...video
      }
      ... on CallToActionRecord {
        ...callToAction
      }
    }
  }
  ${concertLink}
  ${pageLink}
  ${video}
  ${image}
  ${eventBlock}
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
      ... on ConcertListRecord {
        ...eventBlock
      }
      ... on ImageRecord {
        ...image
      }
      ... on VideoRecord {
        ...video
      }
      ... on CallToActionRecord {
        ...callToAction
      }
    }
  }
  ${concertLink}
  ${pageLink}
  ${eventBlock}
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
