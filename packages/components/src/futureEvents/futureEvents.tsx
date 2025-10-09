import { EventListItem } from '../eventListItem/index.js'
import React from 'react'
import { getFutureEvents } from '@mono/data'
export interface Props {
  skip: number
  first: number
}

export const FutureEvents = async ({ skip, first }: Props) => {
  const { data } = await getFutureEvents({ skip, first })

  return (
    <div>
      {data.map((event, index) => (
        <EventListItem
          className="content-layout--small"
          key={event.id}
          data={event}
          size="large"
          isLast={data.length - 1 === index}
        />
      ))}
    </div>
  )
}
