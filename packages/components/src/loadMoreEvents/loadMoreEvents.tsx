'use client'

import React from 'react'
import { EventListItem } from '../eventListItem/index.js'
import { useLoadMoreEvents } from '@mono/hooks'
import layoutStyles from '../body/styles.module.scss'

export interface Props {
  initialSkip: number
  numberOfEvents: number
}

export const LoadMoreEvents = ({ initialSkip, numberOfEvents }: Props) => {
  const { events, ref } = useLoadMoreEvents({ initialSkip, numberOfEvents })

  return (
    <>
      {events.map((event, index) => {
        if (!event?.id) return
        return (
          <EventListItem
            className={layoutStyles.contentLayoutSmall}
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
