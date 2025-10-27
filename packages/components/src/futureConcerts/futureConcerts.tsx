import { ConcertListItem } from '../concertListItem/index.js'
import React from 'react'
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
          className="content-layout--small"
          key={concert.id}
          data={concert}
          size="large"
          isLast={data.length - 1 === index}
        />
      ))}
    </div>
  )
}
