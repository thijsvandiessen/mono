import React from 'react'
import { DefaultPage } from './defaultPage'
import type { Props } from './defaultPage'
import { getPage } from '@mono/graphql'
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
  const originalModule = jest.requireActual('@mono/graphql')
  return {
    __esModule: true,
    ...originalModule,
    getPage: jest.fn(),
  }
})

const getPageMock = jest.mocked(getPage)

describe('Concert component', () => {
  it('shows all the data', async () => {
    getPageMock.mockResolvedValue({
      data: {
        __typename: 'PageRecord',
        title: 'title',
        slug: 'contact',
        _createdAt: 'some date time string',
        _updatedAt: 'some date time string',
        id: 'unique-id',
        content: [],
      },
      error: undefined,
    })

    const Resolved = await resolvedComponent<Props>(DefaultPage, {
      slug: 'contact',
    })

    const { container } = render(<Resolved />)

    expect(container).toMatchSnapshot()
  })
})
