import React from 'react'
import { EventPage } from './eventPage'
import type { Props } from './eventPage'
import { getEventPage } from '@mono/graphql'
import { resolvedComponent } from '@mono/utils'
import { render } from '@testing-library/react'

jest.mock('../navigation', () => {
  const originalModule = jest.requireActual('../navigation')
  return {
    __esModule: true,
    ...originalModule,
    Navigation: jest.fn(() => <div>[Navigation]</div>),
  }
})

jest.mock('@mono/graphql', () => {
  const originalModule = jest.requireActual(
    '@mono/graphql'
  )
  return {
    __esModule: true,
    ...originalModule,
    getEventPage: jest.fn(),
  }
})

const getEventPageMock = jest.mocked(getEventPage)

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
