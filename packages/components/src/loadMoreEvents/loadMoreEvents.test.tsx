import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadMoreEvents } from './loadMoreEvents.jsx'
import React from 'react'
import { getEvents } from '@mono/data'
import { mockEvent } from './mocks/mockEvents.js'

vi.mock('@mono/data', () => ({
  __esModule: true,
  ...vi.importActual<typeof import('@mono/data')>('@mono/data'),
  getEvents: vi.fn(),
}))

vi.mock('@mono/hooks', () => ({
  __esModule: true,
  ...vi.importActual<typeof import('@mono/hooks')>('@mono/hooks'),
  useIntersectionObserver: vi.fn(() => []),
  useLoadMoreEvents: vi.fn(() => ({ events: [], ref: null })),
}))

const getEventsMock = vi.mocked(getEvents)
describe('Events component', () => {
  it('shows all the data', () => {
    getEventsMock.mockResolvedValue({
      data: [mockEvent],
      error: undefined,
    })

    const { container } = render(
      <LoadMoreEvents initialSkip={1} numberOfEvents={10} />
    )

    const element = screen.getByText('1 van 10 concerten')

    expect(element).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
