import React from 'react'

export const useHrefClick = (callback: () => void) => {
  React.useEffect(() => {
    function handle(event: MouseEvent) {
      if (!event.target) return
      if (!('href' in event.target)) return
      requestAnimationFrame(callback)
    }

    document.addEventListener('click', handle)
    return () => {
      document.removeEventListener('click', handle)
    }
  }, [callback])
}
