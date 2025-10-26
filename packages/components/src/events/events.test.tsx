import { Events, type Props } from './events.js'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import type { Props as EventProps } from '../event/event.js'
import React from 'react'
import { getEvents } from '@mono/data'
import { mockEvent } from './mocks/mockEvents.js'
import { resolvedComponent } from '@mono/utils'

vi.mock('@mono/data', () => ({
  ...vi.importActual<typeof import('@mono/data')>('@mono/data'),
  __esModule: true,
  getEvents: vi.fn(),
  ConcertModelOrderBy: vi.fn(),
}))

vi.mock('../event/index.js', () => ({
  __esModule: true,
  ...vi.importActual<typeof import('../event/index.js')>('../event/index.js'),
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
