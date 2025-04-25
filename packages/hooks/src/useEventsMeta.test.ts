import { renderHook, waitFor } from '@testing-library/react'
import { getEventsMeta } from '@mono/data'
import { useEventsMeta } from './useEventsMeta.js'
import { vi, describe, expect, it } from 'vitest'

vi.mock('@mono/data', () => {
  const originalModule = vi.importActual('@mono/data')
  return {
    __esModule: true,
    ...originalModule,
    getEventsMeta: vi.fn(),
  }
})

const getEventsMetaMock = vi.mocked(getEventsMeta)

describe('useEventsMeta', () => {
  it('should return the number of pages', async () => {
    getEventsMetaMock.mockResolvedValue({
      data: {
        __typename: 'CollectionMetadata',
        count: 1,
      },
      error: undefined,
    })

    const { result } = renderHook(() => useEventsMeta())

    await waitFor(() => {
      expect(result.current.numberOfEvents).toEqual(1)
    })
  })
})
