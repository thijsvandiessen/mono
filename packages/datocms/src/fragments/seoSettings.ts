import { gql } from '@urql/core'
import { seoField } from './seoField'
import type { SeoSettingsFragment } from '../generated/graphql'
import type { TypedDocumentNode } from '@urql/core'

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
