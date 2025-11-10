import { type Concert, ConcertModelOrderBy, getConcerts } from '@mono/data'
import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from './useIntersectionObserver.js'

interface Props {
  initialSkip: number
  numberOfConcerts: number
}

export const useLoadMoreConcerts = ({
  initialSkip,
  numberOfConcerts,
}: Props) => {
  const [skip, setSkip] = useState(initialSkip)
  const [loading, setLoading] = useState(false)
  const [concerts, setConcerts] = useState<Concert[]>([])
  const ref = useRef<HTMLDivElement>(null)
  const [entry] = useIntersectionObserver({
    enabled: Boolean(numberOfConcerts),
    ref,
  })

  useEffect(() => {
    const interval = 10
    if (loading) return
    if (!entry?.isIntersecting) return
    if (!numberOfConcerts) return
    if (concerts.length === numberOfConcerts - initialSkip) return
    if (skip > numberOfConcerts) return
    let cancelled = false
    const raf = requestAnimationFrame(() => {
      if (cancelled) return
      setLoading(true)
      // TODO: abort signal to stop fetching
      getConcerts({
        skip,
        first: interval,
        order: [ConcertModelOrderBy.PositionAsc],
      })
        .then(({ data }) => {
          if (!data || cancelled) return
          setConcerts((prev) => [...prev, ...data])
          setSkip((prev) => prev + interval)
        })
        .catch(() => {
          if (!cancelled) console.log('TODO: render an error')
        })
        .finally(() => {
          if (!cancelled) setLoading(false)
        })
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
    }
  }, [
    loading,
    skip,
    numberOfConcerts,
    entry?.isIntersecting,
    concerts.length,
    initialSkip,
  ])

  return {
    concerts,
    ref,
  }
}
