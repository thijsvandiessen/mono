import { renderHook } from '@testing-library/react'
import { useIntersectionObserver } from './useIntersectionObserver.js'
import { useRef } from 'react'
import { vi, describe, test, expect } from 'vitest'

describe('useIntersectionObserver', () => {
  test('should pass', () => {
    const mockObserver = {
      observe: vi.fn(),
      disconnect: vi.fn(),
    }
    const mockIntersectionObserver = vi.fn()
    mockIntersectionObserver.mockImplementation((callback) => {
      callback([{ isIntersecting: true }], mockObserver)
      return mockObserver
    })
    window.IntersectionObserver = mockIntersectionObserver

    const mockHTMLDivElement = document.createElement('div')
    const { result, unmount } = renderHook(() => {
      const elementRef = useRef<HTMLElement>(mockHTMLDivElement)
      return useIntersectionObserver({ enabled: true, ref: elementRef })
    })
    expect(result.current).toEqual([{ isIntersecting: true }])
    expect(mockIntersectionObserver).toBeCalledWith(
      expect.any(Function),
      undefined
    )
    expect(mockObserver.observe).toBeCalledWith(mockHTMLDivElement)

    unmount()

    expect(mockObserver.disconnect).toBeCalled()
  })
})
