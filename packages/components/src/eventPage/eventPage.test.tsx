import React from 'react'
import { EventPage, type Props } from './eventPage'
import { getEventPage } from '@mono/data'
import { resolvedComponent } from '@mono/utils'
import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('../navigation', () => {
  const originalModule = vi.importActual('../navigation')
  return {
    __esModule: true,
    ...originalModule,
    Navigation: vi.fn(() => <div>[Navigation]</div>),
  }
})

vi.mock('@mono/data', () => {
  const originalModule = vi.importActual('@mono/data')
  return {
    __esModule: true,
    ...originalModule,
    getEventPage: vi.fn(),
  }
})

const getEventPageMock = vi.mocked(getEventPage)

describe('Concert component', () => {
  it('shows all the data', async () => {
    getEventPageMock.mockResolvedValue({
      data: {
        id: 'unique-id',
        title: 'title',
        image: undefined,
        locations: [],
        url: '/some-slug',
        content: [],
      },
      error: undefined,
    })

    const Resolved = await resolvedComponent<Props>(EventPage, {
      slug: 'tournee-20',
    })

    const { container } = render(<Resolved />)

    expect(container).toMatchSnapshot()
  })
})
