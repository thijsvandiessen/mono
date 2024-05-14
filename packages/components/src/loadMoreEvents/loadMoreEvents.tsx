'use client'
import { EventListItem } from '../eventListItem'
import type { Event as EventType } from '@mono/graphql/src/types/event'
import React from 'react'
import { getEvents } from '@mono/graphql/src/getters/getEvents'
import { useEventsMeta } from '@mono/hooks/src/useEventsMeta'
import { useIntersectionObserver } from '@mono/hooks/src/useIntersectionObserver'
import { ConcertModelOrderBy } from '@mono/graphql/src/generated/graphql'

export interface Props {
  initialSkip: number
}

export const LoadMoreEvents = ({ initialSkip }: Props) => {
  const [skip, setSkip] = React.useState(initialSkip)
  const [loading, setLoading] = React.useState(false)
  const [events, setEvents] = React.useState<(EventType | undefined)[]>([])
  const ref = React.useRef<HTMLDivElement>(null)
  const { numberOfEvents } = useEventsMeta()
  const [entry] = useIntersectionObserver({
    enabled: Boolean(numberOfEvents),
    ref,
  })

  React.useEffect(() => {
    const interval = 10
    if (loading) return
    if (!entry?.isIntersecting) return
    if (!numberOfEvents) return
    if (events.length === numberOfEvents - initialSkip) return
    if (skip > numberOfEvents) return
    setLoading(true)
    // TODO: abort signal to stop fetching
    getEvents({ skip, first: interval, order: [ConcertModelOrderBy.PositionAsc] })
      .then(({ data }) => {
        if (!data) return
        setEvents((prev) => [...prev, ...data])
        setSkip((prev) => {
          return prev + interval
        })
      })
      .catch(() => {
        console.log('TODO: render an error')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [
    loading,
    skip,
    numberOfEvents,
    entry?.isIntersecting,
    events.length,
    initialSkip,
  ])

  return (
    <>
      {events.map((event, index) => {
        if (!event?.id) return
        return (
          <EventListItem
            className="content-layout--small"
            key={event.id}
            data={event}
            isLast={events.length - 1 === index}
          />
        )
      })}

      {numberOfEvents ? (
        <div ref={ref}>
          <p className="text-small">
            {/* TODO: simplify/fix this logic */}
            {events.length + initialSkip} van {numberOfEvents} concerten
          </p>
        </div>
      ) : (
        <p className="text-small">...</p>
      )}
    </>
  )
}
