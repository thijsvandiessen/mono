import { ConcertListItem } from '../concertListItem/index.js'
import { getFutureConcerts } from '@mono/data'
export interface Props {
  skip: number
  first: number
}

export const FutureConcerts = async ({ skip, first }: Props) => {
  const { data } = await getFutureConcerts({ skip, first })

  return (
    <div>
      {data.map((concert, index) => (
        <ConcertListItem
          key={concert.id}
          data={concert}
          size="large"
          isLast={data.length - 1 === index}
        />
      ))}
    </div>
  )
}
