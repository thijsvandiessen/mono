import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ConcertListItem } from './concertListItem.jsx'
import React from 'react'
import { getConcert } from '@mono/data'
import { mockConcert } from './mocks/mockConcert.js'

vi.mock('@mono/next-js', () => {
  return {
    _esModule: true,
    Link: vi.fn(({ href, onClick, className, children }) => (
      <a className={className} href={href} onClick={onClick}>
        {children}
      </a>
    )),
    Image: vi.fn((className, src, alt, width, height) => (
      <img
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    )),
  }
})

vi.mock('../location/index.js', () => {
  const originalModule = vi.importActual<typeof import('../location/index.js')>(
    '../location/index.js'
  )
  return {
    __esModule: true,
    ...originalModule,
    Location: vi.fn(() => <p>Location Component</p>),
  }
})

vi.mock('@mono/data', () => {
  const originalModule =
    vi.importActual<typeof import('@mono/data')>('@mono/data')
  return {
    __esModule: true,
    ...originalModule,
    getConcert: vi.fn(),
  }
})

const getConcertMock = vi.mocked(getConcert)

describe('Concert component', () => {
  it('shows all the data', () => {
    getConcertMock.mockResolvedValue({
      data: mockConcert,
      error: undefined,
    })

    const { container } = render(<ConcertListItem data={mockConcert} />)

    expect(container).toMatchSnapshot()

    expect(screen.getByText('name')).toBeInTheDocument()
  })
})
