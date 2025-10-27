import { useEffect } from 'react'

export const useEscapeKey = (callback: () => void) => {
  useEffect(() => {
    if (typeof globalThis.window === 'undefined') return

    function checkKeyPress(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      callback()
    }
    globalThis.document.addEventListener('keydown', checkKeyPress)
    return () =>
      globalThis.document.removeEventListener('keydown', checkKeyPress)
  }, [callback])

  return
}
