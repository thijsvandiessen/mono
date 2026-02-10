import { Link } from '@mono/next-js'
import styles from './notFound.module.scss'

export const NotFound = () => {
  return (
    <section className={styles.wrapper}>
      <h2>Niet gevonden</h2>
      <p>Deze pagina is niet gevonden.</p>
      <p>
        <Link href="/">Ga terug naar de homepage</Link>
      </p>
    </section>
  )
}
