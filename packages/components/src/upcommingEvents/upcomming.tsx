import React from 'react'
import type { Event } from '@mono/data'
import { Event as EventComponent } from '../event/event.jsx'
import styles from './styles.module.scss'
import { upcomingEvents } from './upcommingEvents.js'

interface UpcommingEventsProps {
  eventData: Event[]
}

export const UpcommingEvents = ({ eventData }: UpcommingEventsProps) => {
  const upcomming = upcomingEvents({ events: eventData })

  if (upcomming.length === 0) return null

  return (
    <div>
      <h2 className={styles.header}>Aankomende concerten</h2>
      {upcomming.map((event) => {
        return (
          <EventComponent
            className="content-layout--small"
            key={event.id}
            id={event.id}
          />
        )
      })}
      <hr />

      {eventData.length > upcomming.length && (
        <h2 className={styles.header}>Overige concerten</h2>
      )}
    </div>
  )
}
