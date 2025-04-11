import React from 'react'
import { Event } from '../event/event'
import { getEvents } from '@mono/data'
import { ConcertModelOrderBy } from '@mono/data'

export interface Props {
  skip: number
  first: number
}

export const Events = async ({ skip, first }: Props) => {
  const { data } = await getEvents({
    skip,
    first,
    order: ConcertModelOrderBy.PositionAsc,
  })
  if (!data) return null

  return (
    <section>
      {data.map((event) => {
        if (!event?.id) return
        return <Event key={event.id} id={event.id} />
      })}
    </section>
  )
}
