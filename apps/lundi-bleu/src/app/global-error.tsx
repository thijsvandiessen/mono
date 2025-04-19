'use client'
import { ErrorMessage } from '@mono/components'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <body>
        <ErrorMessage reset={reset} error={error} />
      </body>
    </html>
  )
}
