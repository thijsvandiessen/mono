import { renderHook, waitFor } from '@testing-library/react'
import { getPagesMeta } from '@mono/data'
import { usePagesMeta } from './usePagesMeta.js'
import { vi, describe, it, expect } from 'vitest'

vi.mock('@mono/data', () => {
  const originalModule = vi.importActual('@mono/data')
  return {
    __esModule: true,
    ...originalModule,
    getPagesMeta: vi.fn(),
  }
})

const getPagesMetaMock = vi.mocked(getPagesMeta)

describe('usePagesMeta', () => {
  it('should return the number of pages', async () => {
    getPagesMetaMock.mockResolvedValue({
      data: {
        __typename: 'CollectionMetadata',
        count: 1,
      },
      error: undefined,
    })

    const { result } = renderHook(() => usePagesMeta())

    await waitFor(() => {
      expect(result.current.numberOfPages).toEqual(1)
    })
  })
})
