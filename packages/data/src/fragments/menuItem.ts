import { type TypedDocumentNode, gql } from '@urql/core'
import type { MenuItemFragment } from '../generated/graphql.js'
import { concertLink } from './concertLink.js'
import { pageLink } from './pageLink.js'

export const menuItem: TypedDocumentNode<MenuItemFragment> = gql`
  fragment menuItem on MenuItemRecord {
    id
    label
    link {
      ... on ConcertRecord {
        ...concertLink
      }
      ... on PageRecord {
        ...pageLink
      }
    }
  }
  ${concertLink}
  ${pageLink}
`
