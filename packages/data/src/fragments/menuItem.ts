import { gql } from '@urql/core'
import { pageLink } from './pageLink'
import { concertLink } from './concertLink'
import type { TypedDocumentNode } from '@urql/core'
import type { MenuItemFragment } from '../generated/graphql'

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
