import { ConcertListItem } from '../concertListItem/index.js'
import { getConcert } from '@mono/data'

export interface Props {
  className?: string
  id: string
  size?: 'small' | 'large'
  isLast?: boolean
}

export const Concert = async ({
  className,
  id,
  size = 'small',
  isLast,
}: Props) => {
  const { data } = await getConcert({ id })
  if (!data) return null

  return (
    <ConcertListItem
      className={className}
      data={data}
      size={size}
      isLast={isLast}
    />
  )
}
