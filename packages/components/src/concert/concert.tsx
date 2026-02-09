import { ConcertListItem } from '../concertListItem/index.js'
import { getConcert } from '@mono/data'

export interface Props {
  id: string
  size?: 'small' | 'large'
  isLast?: boolean
}

export const Concert = async ({ id, size = 'small', isLast }: Props) => {
  const { data } = await getConcert({ id })
  if (!data) return null

  return <ConcertListItem data={data} size={size} isLast={isLast} />
}
