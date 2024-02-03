import { gql } from '@urql/core'
import { seoField } from './seoField'
import { tag } from './tag'
import { identifiable } from './identifiable'

export const eventPageSeo = gql`
  fragment eventPageSeo on ConcertRecord {
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
