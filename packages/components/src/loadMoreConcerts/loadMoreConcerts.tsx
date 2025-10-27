'use client'

import React from 'react'
import { ConcertListItem } from '../concertListItem/index.js'
import { useLoadMoreConcerts } from '@mono/hooks'

export interface Props {
  initialSkip: number
  numberOfConcerts: number
}

export const LoadMoreConcerts = ({ initialSkip, numberOfConcerts }: Props) => {
  const { concerts, ref } = useLoadMoreConcerts({
    initialSkip,
    numberOfConcerts,
  })

  return (
    <>
      {concerts.map((concert, index) => {
        if (!concert?.id) return
        return (
          <ConcertListItem
            className="content-layout--small"
            key={concert.id}
            data={concert}
            isLast={concerts.length - 1 === index}
          />
        )
      })}

      {numberOfConcerts ? (
        <div ref={ref}>
          <p className="text-small">
            {concerts.length + initialSkip} van {numberOfConcerts} concerten
          </p>
        </div>
      ) : (
        <p className="text-small">...</p>
      )}
    </>
  )
}
