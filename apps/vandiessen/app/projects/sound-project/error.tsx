'use client' // Error components must be Client Components

import { ErrorMessage } from '@mono/components'

export default function Error({
  reset,
  error,
}: {
  error: Error
  reset: () => void
}) {
  return <ErrorMessage reset={reset} error={error} />
}
