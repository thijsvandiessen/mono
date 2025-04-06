'use client'
import { EventListItem } from '../eventListItem'
import type { Event as EventType } from '@mono/graphql'
import React, { useEffect, useRef, useState } from 'react'
import { getEvents } from '@mono/graphql'
import { useEventsMeta, useIntersectionObserver } from '@mono/hooks'
import { ConcertModelOrderBy } from '@mono/graphql'

export interface Props {
  initialSkip: number
}

export const LoadMoreEvents = ({ initialSkip }: Props) => {
  const [skip, setSkip] = useState(initialSkip)
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState<(EventType | undefined)[]>([])
  const ref = useRef<HTMLDivElement | null>(null)
  const { numberOfEvents } = useEventsMeta()
  const [entry] = useIntersectionObserver({
    enabled: Boolean(numberOfEvents),
    ref,
  })

  useEffect(() => {
    const interval = 10
    if (loading) return
    if (!entry?.isIntersecting) return
    if (!numberOfEvents) return
    if (events.length === numberOfEvents - initialSkip) return
    if (skip > numberOfEvents) return
    setLoading(true)
    // TODO: abort signal to stop fetching
    getEvents({
      skip,
      first: interval,
      order: [ConcertModelOrderBy.PositionAsc],
    })
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
