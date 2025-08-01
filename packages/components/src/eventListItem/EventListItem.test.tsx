import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EventListItem } from './eventListItem.js'
import React from 'react'
import { getEvent } from '@mono/data'
import { mockEvent } from './mocks/mockEvent.js'

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
  it('shows all the data', () => {
    getEventMock.mockResolvedValue({
      data: mockEvent,
      error: undefined,
    })

    const { container } = render(<EventListItem data={mockEvent} />)

    expect(container).toMatchSnapshot()

    expect(screen.getByText('name')).toBeInTheDocument()
  })
})
