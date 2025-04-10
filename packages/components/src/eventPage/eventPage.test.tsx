import React from 'react'
import { EventPage, type Props } from './eventPage'
import { getEventPage } from '@mono/datocms'
import { resolvedComponent } from '@mono/utils'
import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

vi.mock('../navigation', () => {
  const originalModule = vi.importActual('../navigation')
  return {
    __esModule: true,
    ...originalModule,
    Navigation: vi.fn(() => <div>[Navigation]</div>),
  }
})

vi.mock('@mono/datocms', () => {
  const originalModule = vi.importActual('@mono/datocms')
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
