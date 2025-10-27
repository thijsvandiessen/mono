import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { LoadMoreConcerts } from '../loadMoreConcerts/index.js'
import { Concert } from '../concert/index.js'
import type { ConcertsProps } from './concertsPage.types.js'
import { UpcommingConcerts } from '../upcommingConcerts/upcomming.jsx'
import { pastConcerts } from './pastConcerts.js'

export const Concerts = ({
  concertData,
  first,
  numberOfConcerts,
}: ConcertsProps) => (
  <div className={classNames(styles.concerts, 'content-layout')}>
    <UpcommingConcerts concertData={concertData} />
    {pastConcerts({ concerts: concertData }).map((concert) => {
      return (
        <Concert
          className="content-layout--small"
          key={concert.id}
          id={concert.id}
        />
      )
    })}

    <LoadMoreConcerts initialSkip={first} numberOfConcerts={numberOfConcerts} />
  </div>
)
