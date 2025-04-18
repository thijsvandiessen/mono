import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadMoreEvents } from './loadMoreEvents'
import React from 'react'
import { getEvents } from '@mono/data'
import { mockEvent } from './mocks/mockEvents'

vi.mock('@mono/data', () => ({
  __esModule: true,
  ...vi.importActual('@mono/data'),
  getEvents: vi.fn(),
}))

vi.mock('@mono/hooks', () => ({
  __esModule: true,
  ...vi.importActual('@mono/hooks'),
  useEventsMeta: vi.fn(() => ({ numberOfEvents: 10 })),
  useIntersectionObserver: vi.fn(() => []),
}))

const getEventsMock = vi.mocked(getEvents)

describe('Events component', () => {
  it('shows all the data', () => {
    getEventsMock.mockResolvedValue({
      data: [mockEvent],
      error: undefined,
    })

    const { container } = render(<LoadMoreEvents initialSkip={1} />)

    expect(screen.getByText('1 van 10 concerten')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
