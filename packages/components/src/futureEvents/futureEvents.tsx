import React from 'react'
import Link from 'next/link'
import { EventListItem } from '../eventListItem'
import { getFutureEvents } from '@mono/data'
import type { Event } from '@mono/data'

export interface Props {
  skip: number
  first: number
}

export const FutureEvents = async ({ skip, first }: Props) => {
  const { data } = await getFutureEvents({ skip, first })

  const events = data.reduce((previousValues: Event[], currentvalue) => {
    const future = currentvalue?.locations.find((location) => {
      if (!location?.startTime) {
        return false
      }

      try {
        return new Date(location?.startTime ?? '') > new Date()
      } catch {
        return false
      }
    })

    if (future?.id) {
      return [...previousValues, currentvalue]
    }
    return previousValues
  }, [])

  if (!data || events?.length === 0)
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
