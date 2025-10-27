import { useEffect, useRef } from 'react'

export const useOutsideClick = <T>(callback: () => void) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (typeof globalThis.window === 'undefined') return

    function handleClickOutside(event: MouseEvent) {
      if (!(event.target instanceof HTMLElement)) return
      if (!(ref.current instanceof HTMLElement)) return
      if (ref.current.contains(event.target)) return
      callback()
    }
    globalThis.document.addEventListener('click', handleClickOutside, true)
    return () =>
      globalThis.document.removeEventListener('click', handleClickOutside, true)
  }, [callback])

  return ref
}
