import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from './useIntersectionObserver.js'
import { type Concert, ConcertModelOrderBy, getConcerts } from '@mono/data'

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
    setLoading(true)
    // TODO: abort signal to stop fetching
    getConcerts({
      skip,
      first: interval,
      order: [ConcertModelOrderBy.PositionAsc],
    })
      .then(({ data }) => {
        setConcerts((prev) => [...prev, ...data])
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
