import type { Props as EventListItemProps } from '../eventListItem'
import { FutureEvents, type Props } from './futureEvents'
import React from 'react'
import { getFutureEvents } from '@mono/graphql'
import { mockEvent } from './mocks/mockEvents'
import { resolvedComponent } from '@mono/utils'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

vi.mock('@mono/graphql', () => {
  const originalModule = vi.importActual('@mono/graphql')
  return {
    __esModule: true,
    ...originalModule,
    getFutureEvents: vi.fn(),
  }
})

vi.mock('../eventListItem/eventListItem', () => {
  const originalModule = vi.importActual('../eventListItem/eventListItem')
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

const getFutureEventsMock = vi.mocked(getFutureEvents)

describe('FutureEvents component', () => {
  it('shows all the data', async () => {
    vi.useFakeTimers().setSystemTime(new Date('2020-01-01'))

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
    vi.useFakeTimers().setSystemTime(new Date('2022-01-01'))

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
    expect(
      screen.getByText(
        'Houd de website in de gaten om up to date te blijven over volgende concerten.'
      )
    ).toBeInTheDocument()
  })
})
