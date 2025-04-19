'use client'

import { useEffect } from 'react'

export const ErrorMessage = ({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Iets ging verkeerd!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Probeer opnieuw
      </button>
    </div>
  )
}
