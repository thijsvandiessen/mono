import React from 'react'
import { Event, type Props } from './event'
import { getEvent } from '@mono/data'
import { mockEvent } from './mocks/mockEvent'
import { resolvedComponent } from '@mono/utils'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('../location/location', () => {
  const originalModule = vi.importActual('../location/location')
  return {
    __esModule: true,
    ...originalModule,
    Location: vi.fn(() => <p>Location Component</p>),
  }
})

vi.mock('@mono/data', () => {
  const originalModule = vi.importActual('@mono/data')
  return {
    __esModule: true,
    ...originalModule,
    getEvent: vi.fn(),
  }
})

const getEventMock = vi.mocked(getEvent)

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
