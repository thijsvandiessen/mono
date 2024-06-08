import React from 'react'
import { Event } from './event'
import type { Props } from './event'
import { getEvent } from '@mono/graphql'
import { mockEvent } from './mocks/mockEvent'
import { resolvedComponent } from '@mono/utils'
import { render, screen } from '@testing-library/react'

jest.mock('../location/location', () => {
  const originalModule = jest.requireActual('../location/location')
  return {
    __esModule: true,
    ...originalModule,
    Location: jest.fn(() => <p>Location Component</p>),
  }
})

jest.mock('@mono/graphql', () => {
  const originalModule = jest.requireActual('@mono/graphql')
  return {
    __esModule: true,
    ...originalModule,
    getEvent: jest.fn(),
  }
})

const getEventMock = jest.mocked(getEvent)

describe('Concert component', () => {
  it('shows all the data', async () => {
    getEventMock.mockResolvedValue({
      data: mockEvent,
      error: undefined,
    })

    const Resolved = await resolvedComponent<Props>(Event, {
      id: 'some id',
    })

    const { container } = render(<Resolved />)

    expect(container).toMatchSnapshot()

    expect(screen.getByText('name')).toBeInTheDocument()
  })
})
