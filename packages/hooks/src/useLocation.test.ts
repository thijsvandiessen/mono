import { describe, expect, it, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { getLocation } from '@mono/data'
import { useLocation } from './useLocation.js'

vi.mock('@mono/data', () => {
  const originalModule =
    vi.importActual<typeof import('@mono/data')>('@mono/data')
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
      expect(result.current).toEqual({
        address: 'address',
        id: 'some-id',
        lat: null,
        lng: null,
        startTime: null,
        ticketLink: null,
        title: 'title',
      })
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
