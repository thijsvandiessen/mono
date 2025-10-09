import { FutureEvents, type Props } from './futureEvents.js'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import type { Props as EventListItemProps } from '../eventListItem/index.js'
import React from 'react'
import { getFutureEvents } from '@mono/data'
import { mockEvent } from './mocks/mockEvents.js'
import { resolvedComponent } from '@mono/utils'

vi.mock('@mono/data', () => {
  const originalModule = vi.importActual('@mono/data')
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
})
