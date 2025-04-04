import { useEffect } from 'react'

export const useEscapeKey = (callback: () => void) => {
  useEffect(() => {
    function checkKeyPress(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      callback()
    }
    document.addEventListener('keydown', checkKeyPress)
    return () => document.removeEventListener('keydown', checkKeyPress)
  }, [callback])

  return
}
