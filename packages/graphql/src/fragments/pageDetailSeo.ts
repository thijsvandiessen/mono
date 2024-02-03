import { gql } from '@urql/core'
import { seoField } from './seoField'
import { tag } from './tag'
import { identifiable } from './identifiable'

export const pageDetailSeo = gql`
  fragment pageDetailSeo on PageRecord {
    ...identifiable
    title
    _seoMetaTags {
      ...tag
    }
    seo {
      ...seoField
    }
  }
  ${identifiable}
  ${seoField}
  ${tag}
`
