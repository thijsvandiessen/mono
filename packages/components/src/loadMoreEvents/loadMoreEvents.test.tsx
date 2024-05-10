import { LoadMoreEvents } from './loadMoreEvents'
import React from 'react'
import { getEvents } from '@mono/graphql/src/getters/getEvents'
import { mockEvent } from './mocks/mockEvents'
import { render, screen } from '@testing-library/react'

jest.mock('@mono/graphql/src/getters/getEvents', () => {
  const originalModule = jest.requireActual(
    '@mono/graphql/src/getters/getEvents'
  )
  return {
    __esModule: true,
    ...originalModule,
    getEvents: jest.fn(),
  }
})

jest.mock('@mono/hooks/src/useEventsMeta', () => {
  const originalModule = jest.requireActual('@mono/hooks/src/useEventsMeta')
  return {
    __esModule: true,
    ...originalModule,
    useEventsMeta: () => ({ numberOfEvents: 10 }),
  }
})

const getEventsMock = jest.mocked(getEvents)

describe('Events component', () => {
  it('shows all the data', () => {
    getEventsMock.mockResolvedValue({
      data: [mockEvent],
      error: undefined,
    })

    const { container } = render(<LoadMoreEvents initialSkip={1} />)

    expect(screen.getByText('1 van 10 concerten')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
