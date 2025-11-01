import { act, renderHook } from '@testing-library/react'
import { useIntersectionObserver } from './useIntersectionObserver.js'
import { useRef } from 'react'
import { afterEach, describe, expect, test, vi } from 'vitest'

describe('useIntersectionObserver', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.clearAllMocks()
  })

  test('observes the element and disconnects on unmount', () => {
    const observe = vi.fn()
    const unobserve = vi.fn()
    const disconnect = vi.fn()
    const takeRecords = vi.fn(() => [])
    let cb!: IntersectionObserverCallback

    class IntersectionObserverMock implements IntersectionObserver {
      readonly root = null
      readonly rootMargin = ''
      readonly thresholds = []
      constructor(callback: IntersectionObserverCallback) {
        cb = callback
      }
      observe = observe
      unobserve = unobserve
      disconnect = disconnect
      takeRecords = takeRecords
    }

    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

    const div = document.createElement('div')

    const { result, unmount } = renderHook(() => {
      const ref = useRef<HTMLElement>(div)
      return useIntersectionObserver({ enabled: true, ref })
    })

    expect(observe).toHaveBeenCalledWith(div)

    act(() => {
      const rect = div.getBoundingClientRect()
      cb(
        [
          {
            isIntersecting: true,
            target: div,
            intersectionRatio: 1,
            time: 0,
            boundingClientRect: rect,
            intersectionRect: rect,
            rootBounds: null,
          },
        ],
        {} as IntersectionObserver
      )
    })

    expect(result.current).toEqual([
      expect.objectContaining({ isIntersecting: true }),
    ])

    unmount()
    expect(disconnect).toHaveBeenCalled()
  })
})
