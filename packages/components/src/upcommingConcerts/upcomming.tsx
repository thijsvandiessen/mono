import type { Concert } from '@mono/data'
import { Concert as ConcertComponent } from '../concert/index.js'
import styles from './styles.module.scss'
import { upcomingConcerts } from './upcommingConcerts.js'

interface UpcommingConcertsProps {
  concertData: Concert[]
}

export const UpcommingConcerts = ({ concertData }: UpcommingConcertsProps) => {
  const upcomming = upcomingConcerts({ concerts: concertData })

  if (upcomming.length === 0) return null

  return (
    <div>
      <h2 className={styles.header}>Aankomende concerten</h2>
      {upcomming.map((concert) => {
        return (
          <ConcertComponent
            className="content-layout--small"
            key={concert.id}
            id={concert.id}
          />
        )
      })}
      <hr />

      {concertData.length > upcomming.length && (
        <h2 className={styles.header}>Overige concerten</h2>
      )}
    </div>
  )
}
