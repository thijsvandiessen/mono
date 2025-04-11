import Link from 'next/link'
import React from 'react'

export const NotFound = () => {
  return (
    <section className="content-layout">
      <h2>Niet gevonden</h2>
      <p>Deze pagina is niet gevonden.</p>
      <p>
        <Link href="/">Ga terug naar de homepage</Link>
      </p>
    </section>
  )
}
