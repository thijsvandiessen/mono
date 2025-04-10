import React from 'react'
import type { Props as EventProps } from '../event'
import { Events, type Props } from './events'
import { getEvents } from '@mono/datocms'
import { mockEvent } from './mocks/mockEvents'
import { resolvedComponent } from '@mono/utils'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

vi.mock('@mono/datocms', () => ({
  ...vi.importActual('@mono/datocms'),
  __esModule: true,
  getEvents: vi.fn(),
  ConcertModelOrderBy: vi.fn(),
}))

vi.mock('../event/event', () => ({
  ...vi.importActual('../event/event'),
  __esModule: true,
  Event: (props: EventProps) => (
    <div>
      [Event]: <span>{props.id}</span>
    </div>
  ),
}))

const getEventsMock = vi.mocked(getEvents)

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
