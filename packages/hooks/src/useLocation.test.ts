import { renderHook, waitFor } from '@testing-library/react'
import { getLocation } from '@mono/data'
import { useLocation } from './useLocation'

jest.mock('@mono/data', () => {
  const originalModule = jest.requireActual('@mono/data')
  return {
    __esModule: true,
    ...originalModule,
    getLocation: jest.fn(),
  }
})

const getLocationMock = jest.mocked(getLocation)

describe('useLocation', () => {
  it('should return the number of pages', async () => {
    getLocationMock.mockResolvedValue({
      data: {
        id: 'some-id',
      },
      error: undefined,
    })

    const { result } = renderHook(() => useLocation({ id: 'some-id' }))

    await waitFor(() => {
      expect(result.current).toEqual({ id: 'some-id' })
    })
  })
})
