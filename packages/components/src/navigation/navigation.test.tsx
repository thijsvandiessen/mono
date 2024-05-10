import { Navigation } from './navigation'
import React from 'react'
import { getGeneralInfo } from '@mono/graphql/src/getters/getGeneralInfo'
import { mockMenuData } from './mocks/mockMenuData'
import { resolvedComponent } from '@mono/utils/src/testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'

jest.mock('@mono/graphql/src/getters/getGeneralInfo', () => {
  const originalModule = jest.requireActual(
    '@mono/graphql/src/getters/getLocation'
  )
  return {
    __esModule: true,
    ...originalModule,
    getGeneralInfo: jest.fn(),
  }
})

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

const getGeneralInfoMock = jest.mocked(getGeneralInfo)

jest.mock('@mono/graphql/src/getters/getSiteMetadata', () => {
  const originalModule = jest.requireActual(
    '@mono/graphql/src/getters/getSiteMetadata'
  )
  return {
    __esModule: true,
    ...originalModule,
    getSiteMetadata: jest.fn(() => ({
      metadata: {
        title: 'Default title',
        description: 'Default description',
        base_url: 'https://example.com',
      },
      error: undefined,
    })),
  }
})

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
