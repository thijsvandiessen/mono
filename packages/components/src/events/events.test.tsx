import React from 'react'
import type { Props as EventProps } from '../event'
import { Events } from './events'
import type { Props } from './events'
import { getEvents } from '@mono/graphql'
import { mockEvent } from './mocks/mockEvents'
import { resolvedComponent } from '@mono/utils'
import { render, screen } from '@testing-library/react'

jest.mock('@mono/graphql', () => {
  const originalModule = jest.requireActual('@mono/graphql')
  return {
    __esModule: true,
    ...originalModule,
    getEvents: jest.fn(),
  }
})

jest.mock('../event/event', () => {
  const originalModule = jest.requireActual('../event/event')
  return {
    __esModule: true,
    ...originalModule,
    Event: (props: EventProps) => (
      <div>
        [Event]: <span>{props.id}</span>
      </div>
    ),
  }
})

const getEventsMock = jest.mocked(getEvents)

describe('Events component', () => {
  it('shows all the data', async () => {
    getEventsMock.mockResolvedValue({
      data: [mockEvent],
      error: undefined,
    })

    const ResolvedEvents = await resolvedComponent<Props>(Events, {
      skip: 0,
      first: 3,
    })

    const { container } = render(<ResolvedEvents />)

    expect(container).toMatchSnapshot()
    expect(screen.getByText('mock-id')).toBeInTheDocument()
  })
})
