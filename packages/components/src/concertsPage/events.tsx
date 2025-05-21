import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { LoadMoreEvents } from '../loadMoreEvents/index.js'
import { Event } from '../event/index.js'
import type { EventsProps } from './concertsPage.types.js'

export const Events = ({ eventData, first, numberOfEvents }: EventsProps) => (
  <div className={classNames(styles.concerts, 'content-layout')}>
    {eventData?.map((event) => {
      if (!event?.id) return

      return (
        <Event className="content-layout--small" key={event.id} id={event.id} />
      )
    })}

    <LoadMoreEvents initialSkip={first} numberOfEvents={numberOfEvents} />
  </div>
)
