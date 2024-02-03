import React from 'react'
import Link from 'next/link'
import { EventListItem } from '../eventListItem'
import { getFutureEvents } from '@crea/graphql/src/getters/getFutureEvents'

export interface Props {
  skip: number
  first: number
}

export const FutureEvents = async ({ skip, first }: Props) => {
  const { data } = await getFutureEvents({ skip, first })
  if (!data || data?.length === 0)
    return (
      <>
        <h2>Komende concerten</h2>
        <p>
          Houd de website in de gaten om up to date te blijven over volgende
          concerten.
        </p>
        <Link href="/concerten">Bekijk al onze vorige concerten</Link>
      </>
    )

  return (
    <div>
      {data.map((event, index) => {
        if (!event?.id) return null
        return (
          <EventListItem
            className="content-layout--small"
            key={event.id}
            data={event}
            size="large"
            isLast={data.length - 1 === index}
          />
        )
      })}
    </div>
  )
}
