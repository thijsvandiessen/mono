import { getEventsMeta } from '@mono/graphql'
import { useEventsMeta } from './useEventsMeta'
import { renderHook, waitFor } from '@testing-library/react'

jest.mock('@mono/graphql', () => {
  const originalModule = jest.requireActual(
    '@mono/graphql'
  )
  return {
    __esModule: true,
    ...originalModule,
    getEventsMeta: jest.fn(),
  }
})

const getEventsMetaMock = jest.mocked(getEventsMeta)

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
