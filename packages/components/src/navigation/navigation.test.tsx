import { Navigation } from './navigation'
import React from 'react'
import { getGeneralInfo } from '@mono/graphql'
import { mockMenuData } from './mocks/mockMenuData'
import { resolvedComponent } from '@mono/utils'
import { render, screen } from '@testing-library/react'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

jest.mock('@mono/graphql', () => {
  const originalModule = jest.requireActual('@mono/graphql')
  return {
    __esModule: true,
    ...originalModule,
    getGeneralInfo: jest.fn(),
    getSiteMetadata: jest.fn(() => ({
      metadata: {
        title: '',
        description: 'Default description',
        base_url: 'https://example.com',
      },
      error: undefined,
    })),
  }
})

const getGeneralInfoMock = jest.mocked(getGeneralInfo)

describe('Concert component', () => {
  it('shows all the data', async () => {
    getGeneralInfoMock.mockResolvedValueOnce({
      data: mockMenuData,
      error: undefined,
    })

    const Resolved = await resolvedComponent(Navigation, {})

    const { container } = render(<Resolved />)

    expect(container).toMatchSnapshot()
    expect(screen.getByText('contact')).toBeTruthy()
  })
})
