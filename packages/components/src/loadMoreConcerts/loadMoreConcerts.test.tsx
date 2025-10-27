import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadMoreConcerts } from './loadMoreConcerts.jsx'
import React from 'react'
import { getConcerts } from '@mono/data'
import { mockConcert } from './mocks/mockConcerts.js'

vi.mock('@mono/data', () => {
  return {
    __esModule: true,
    getConcerts: vi.fn(),
  }
})

vi.mock('@mono/hooks', () => {
  return {
    __esModule: true,
    useIntersectionObserver: vi.fn(() => []),
    useLoadMoreConcerts: vi
      .fn()
      .mockImplementation(() => ({ concerts: [], ref: React.createRef() })),
  }
})

vi.mock('../concertListItem/index.js', () => {
  return {
    __esModule: true,
    ConcertListItem: vi.fn(() => <p>[ConcertListItem]</p>),
  }
})

const getConcertsMock = vi.mocked(getConcerts)

describe('Concerts component', () => {
  it('shows all the data', () => {
    getConcertsMock.mockResolvedValue({
      data: [mockConcert],
      error: undefined,
    })

    screen.debug()

    const { container } = render(
      <LoadMoreConcerts initialSkip={1} numberOfConcerts={10} />
    )

    const element = screen.getByText('1 van 10 concerten')

    expect(element).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
