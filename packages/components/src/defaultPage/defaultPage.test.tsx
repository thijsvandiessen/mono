import { DefaultPage, type Props } from './defaultPage.js'
import { describe, expect, it, vi } from 'vitest'
import React from 'react'
import { getPage } from '@mono/data'
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
        _firstPublishedAt: 'some date time string',
        _publishedAt: 'some date time string',
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
