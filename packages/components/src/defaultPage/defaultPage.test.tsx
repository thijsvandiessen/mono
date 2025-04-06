import React from 'react'
import { DefaultPage, type Props } from './defaultPage'
import { getPage } from '@mono/graphql'
import { resolvedComponent } from '@mono/utils'
import { render } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'

vi.mock('../navigation', () => {
  const originalModule = vi.importActual('../navigation')
  return {
    __esModule: true,
    ...originalModule,
    Navigation: vi.fn(() => <div>[Navigation]</div>),
  }
})

vi.mock('@mono/graphql', () => {
  const originalModule = vi.importActual('@mono/graphql')
  return {
    __esModule: true,
    ...originalModule,
    getPage: vi.fn(),
  }
})

const getPageMock = vi.mocked(getPage)

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
