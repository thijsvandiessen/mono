import { renderHook, waitFor } from '@testing-library/react'
import { usePagesMeta } from './usePagesMeta'
import { getPagesMeta } from '@mono/datocms'

jest.mock('@mono/datocms', () => {
  const originalModule = jest.requireActual('@mono/datocms')
  return {
    __esModule: true,
    ...originalModule,
    getPagesMeta: jest.fn(),
  }
})

const getPagesMetaMock = jest.mocked(getPagesMeta)

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
