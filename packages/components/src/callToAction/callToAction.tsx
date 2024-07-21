import { Button } from '../button'
import { isOfType } from '../contentField/isOfType'
import { ArrowRight } from '../icons/arrow-right'
import type {
  CallToActionFragment,
  ConcertLinkFragment,
  PageLinkFragment,
} from '@mono/graphql'
import { slugFormatter } from '@mono/utils'

interface Props {
  record: CallToActionFragment
}

export const CallToAction = ({ record }: Props) => {
  const { pageLink, externalUrl, label, variant } = record
  const primary = variant === 'primary' ? variant : undefined
  const secondary = variant === 'secondary' ? variant : undefined
  const tertiary = variant === 'tertiary' ? variant : undefined

  if (!pageLink) {
    return (
      <Button
        href={externalUrl || ''}
        target="_blank"
        rel="noopener noreferrer"
        rightIcon={<ArrowRight />}
        variant={primary || secondary || tertiary}
      >
        {label}
      </Button>
    )
  }

  const { slug } = pageLink

  if (isOfType<PageLinkFragment>(pageLink, 'PageRecord')) {
    if (!slug) return null
    return (
      <Button
        href={slugFormatter({ slug })}
        rightIcon={<ArrowRight />}
        variant={primary || secondary || tertiary}
      >
        {label}
      </Button>
    )
  }

  if (isOfType<ConcertLinkFragment>(pageLink, 'ConcertRecord')) {
    if (!slug) return null
    return (
      <Button
        href={slugFormatter({
          slug,
          prefix: '/concerten',
        })}
        rightIcon={<ArrowRight />}
        variant={primary || secondary || tertiary}
      >
        {label}
      </Button>
    )
  }

  return null
}
