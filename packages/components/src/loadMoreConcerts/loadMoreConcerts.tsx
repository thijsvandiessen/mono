'use client'

import { ConcertListItem } from '../concertListItem/index.js'
import React from 'react'
import styles from './styles.module.scss'
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
            key={concert.id}
            data={concert}
            isLast={concerts.length - 1 === index}
          />
        )
      })}

      {numberOfConcerts ? (
        <div ref={ref} className={styles.numberOfConcerts}>
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
