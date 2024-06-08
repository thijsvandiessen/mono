import type { Props as EventListItemProps } from '../eventListItem'
import { FutureEvents } from './futureEvents'
import type { Props } from './futureEvents'
import React from 'react'
import { getFutureEvents } from '@mono/graphql'
import { mockEvent } from './mocks/mockEvents'
import { resolvedComponent } from '@mono/utils'
import { render, screen } from '@testing-library/react'

jest.mock('@mono/graphql', () => {
  const originalModule = jest.requireActual(
    '@mono/graphql'
  )
  return {
    __esModule: true,
    ...originalModule,
    getFutureEvents: jest.fn(),
  }
})

jest.mock('../eventListItem/eventListItem', () => {
  const originalModule = jest.requireActual('../eventListItem/eventListItem')
  return {
    __esModule: true,
    ...originalModule,
    EventListItem: ({ data }: EventListItemProps) => (
      <div>
        <span>{data.id}</span>
      </div>
    ),
  }
})

const getFutureEventsMock = jest.mocked(getFutureEvents)

afterAll(() => {
  jest.setSystemTime()
  jest.useRealTimers();
})

describe('FutureEvents component', () => {
  it('shows all the data', async () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2020-01-01'));

    getFutureEventsMock.mockResolvedValue({
      data: [mockEvent],
      error: undefined,
    })

    const ResolvedFutureEvents = await resolvedComponent<Props>(FutureEvents, {
      skip: 0,
      first: 3,
    })

    const { container } = render(<ResolvedFutureEvents />)

    expect(container).toMatchSnapshot()
    expect(screen.getByText('mock-id')).toBeInTheDocument()
  })

  it('shows no data', async () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2022-01-01'));

    getFutureEventsMock.mockResolvedValue({

      data: [mockEvent],
      error: undefined,
    })

    const ResolvedFutureEvents = await resolvedComponent<Props>(FutureEvents, {
      skip: 0,
      first: 3,
    })

    const { container } = render(<ResolvedFutureEvents />)

    expect(container).toMatchSnapshot()
    expect(screen.getByText('Houd de website in de gaten om up to date te blijven over volgende concerten.')).toBeInTheDocument()
  })
})
