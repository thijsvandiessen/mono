import React from 'react'
import { Link } from '@mono/next-js'
import layoutStyles from '../body/styles.module.scss'

export const NotFound = () => {
  return (
    <section className={layoutStyles.contentLayout}>
      <h2>Niet gevonden</h2>
      <p>Deze pagina is niet gevonden.</p>
      <p>
        <Link href="/">Ga terug naar de homepage</Link>
      </p>
    </section>
  )
}
