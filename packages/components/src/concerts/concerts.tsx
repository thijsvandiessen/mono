import { ConcertModelOrderBy, getConcerts } from '@mono/data'
import { Concert } from '../concert/concert.jsx'
import React from 'react'

export interface Props {
  skip: number
  first: number
}

export const Concerts = async ({ skip, first }: Props) => {
  const { data } = await getConcerts({
    skip,
    first,
    order: ConcertModelOrderBy.PositionAsc,
  })
  if (!data) return null

  return (
    <section>
      {data.map((concert) => {
        if (!concert?.id) return
        return <Concert key={concert.id} id={concert.id} />
      })}
    </section>
  )
}
