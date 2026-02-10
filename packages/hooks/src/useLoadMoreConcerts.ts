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
    enabled: numberOfConcerts > 0,
    ref,
  })

  useEffect(() => {
    const interval = 10
    if (loading) return
    if (!entry?.isIntersecting) return
    if (!numberOfConcerts) return
    if (concerts.length === numberOfConcerts - initialSkip) return
    if (skip > numberOfConcerts) return
    const raf = requestAnimationFrame(() => {
      setLoading(true)
      // TODO: abort signal to stop fetching
      getConcerts({
        skip,
        first: interval,
        order: [ConcertModelOrderBy.PositionAsc],
      })
        .then(({ data }) => {
          if (!data) return
          setConcerts((prev) => [...prev, ...data])
          setSkip((prev) => prev + interval)
        })
        .catch(() => {
          console.log('TODO: render an error')
        })
        .finally(() => {
          setLoading(false)
        })
    })

    return () => {
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
