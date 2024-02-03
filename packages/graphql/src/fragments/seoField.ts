import { gql } from '@urql/core'

export const seoField = gql`
  fragment seoField on SeoField {
    description
    title
    twitterCard
  }
`
