import { type TypedDocumentNode, gql } from '@urql/core'
import type { SeoSettingsFragment } from '../generated/graphql.js'
import { seoField } from './seoField.js'

export const seoSettings: TypedDocumentNode<SeoSettingsFragment> = gql`
  fragment seoSettings on GlobalSeoField {
    facebookPageUrl
    siteName
    titleSuffix
    twitterAccount
    fallbackSeo {
      ...seoField
    }
  }
  ${seoField}
`
