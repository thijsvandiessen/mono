import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from './useIntersectionObserver.js'
import { ConcertModelOrderBy, getEvents, type Event } from '@mono/data'

interface Props {
  initialSkip: number
  numberOfEvents: number
}

export const useLoadMoreEvents = ({ initialSkip, numberOfEvents }: Props) => {
  const [skip, setSkip] = useState(initialSkip)
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState<(Event | undefined)[]>([])
  const ref = useRef<HTMLDivElement | null>(null)
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

  return {
    events,
    ref,
  }
}
