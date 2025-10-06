import { renderHook, waitFor } from '@testing-library/react'
import { getLocation } from '@mono/data'
import { useLocation } from './useLocation.js'
import { vi, it, expect, describe } from 'vitest'

vi.mock('@mono/data', () => {
  const originalModule = vi.importActual('@mono/data')
  return {
    __esModule: true,
    ...originalModule,
    getLocation: vi.fn(),
  }
})

const getLocationMock = vi.mocked(getLocation)

describe('useLocation', () => {
  it('should return the number of pages', async () => {
    getLocationMock.mockResolvedValue({
      data: {
        id: 'some-id',
        title: 'title',
        address: 'address',
        lat: null,
        lng: null,
        ticketLink: null,
        startTime: null,
      },
      error: undefined,
    })

    const { result } = renderHook(() => useLocation({ id: 'some-id' }))

    await waitFor(() => {
      expect(result.current).toEqual({ id: 'some-id' })
    })
  })

  it('should call getLocation with the id', async () => {
    getLocationMock.mockResolvedValue({
      data: {
        id: 'some-id',
        title: 'title',
        address: 'address',
        lat: null,
        lng: null,
        ticketLink: null,
        startTime: null,
      },
      error: undefined,
    })

    renderHook(() => useLocation({ id: 'some-id' }))

    await waitFor(() => {
      expect(getLocationMock).toBeCalledWith({ id: 'some-id' })
    })
  })

  it('should return null when no data is found', async () => {
    getLocationMock.mockResolvedValue({ data: null, error: undefined })

    const { result } = renderHook(() => useLocation({ id: 'some-id' }))

    await waitFor(() => {
      expect(result.current).toBeNull()
    })
  })
})
