import { EventPage, type Props } from './eventPage.js'
import { describe, expect, it, vi } from 'vitest'
import React from 'react'
import { getEventPage } from '@mono/data'
import { render } from '@testing-library/react'
import { resolvedComponent } from '@mono/utils'

vi.mock('../navigation/index.js', () => {
  const originalModule = vi.importActual<
    typeof import('../navigation/index.js')
  >('../navigation/index.js')
  return {
    __esModule: true,
    ...originalModule,
    Navigation: vi.fn(() => <div>[Navigation]</div>),
  }
})

vi.mock('@mono/data', () => {
  const originalModule =
    vi.importActual<typeof import('@mono/data')>('@mono/data')
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
