import { gql } from '@urql/core'

export const music = gql`
  fragment music on MusicRecord {
    id
    title
    composer
  }
`
