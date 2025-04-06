import { useEffect, useState } from 'react'

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: globalThis.innerWidth,
    height: globalThis.innerHeight,
  })

  useEffect(() => {
    function handleResize(entries: ResizeObserverEntry[]) {
      for (const entry of entries) {
        requestAnimationFrame(() => {
          setDimensions({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          })
        })
      }
    }

    const resizeObserver = new ResizeObserver(handleResize)

    resizeObserver.observe(document.body)

    function handleLoad() {
      setDimensions({
        width: globalThis.innerWidth,
        height: globalThis.innerHeight,
      })
    }

    document.addEventListener('load', handleLoad)

    return () => {
      document.removeEventListener('load', handleLoad)
      resizeObserver.disconnect()
    }
  }, [setDimensions])

  return dimensions
}
