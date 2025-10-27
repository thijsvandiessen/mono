import { type RefObject, useEffect, useState } from 'react'

interface Props {
  enabled?: boolean
  ref: RefObject<HTMLElement | null>
  options?: IntersectionObserverInit
}

export const useIntersectionObserver = ({ enabled, ref, options }: Props) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>()

  const callback = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  useEffect(() => {
    if (typeof globalThis.window === 'undefined') return
    if (!enabled) return
    if (!ref?.current) return
    const hasIOSupport = !!globalThis.window.IntersectionObserver
    if (!hasIOSupport || !ref.current) return

    const observer = new IntersectionObserver(callback, options)

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [enabled, ref, options])

  return [entry]
}
