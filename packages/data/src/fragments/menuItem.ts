import { type TypedDocumentNode, gql } from '@urql/core'
import type { MenuItemFragment } from '../generated/graphql'
import { concertLink } from './concertLink'
import { pageLink } from './pageLink'

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
