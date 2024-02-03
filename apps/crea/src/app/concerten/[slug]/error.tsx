'use client' // Error components must be Client Components

import { ErrorMessage } from '@crea/components/src/errorMessage'

export default function Error({
  reset,
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <ErrorMessage reset={reset} error={error} />
}
