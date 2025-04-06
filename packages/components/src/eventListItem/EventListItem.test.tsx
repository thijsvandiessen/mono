import React from 'react'
import { EventListItem } from './eventListItem'
import { getEvent } from '@mono/graphql'
import { mockEvent } from './mocks/mockEvent'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

vi.mock('../location/location', () => {
  const originalModule = vi.importActual('../location/location')
  return {
    __esModule: true,
    ...originalModule,
    Location: vi.fn(() => <p>Location Component</p>),
  }
})

vi.mock('@mono/graphql', () => {
  const originalModule = vi.importActual('@mono/graphql')
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
