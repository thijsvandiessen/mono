import { describe, expect, it, vi } from 'vitest'
import { Navigation } from './navigation.js'
import { getGeneralInfo } from '@mono/data'
import { mockMenuData } from './mocks/mockMenuData.js'
import { render } from '@testing-library/react'
import { resolvedComponent } from '@mono/utils'

vi.mock('../mobileMenu/index.js', () => ({
  __esModule: true,
  MobileMenu: () => <nav>[MobileMenu]</nav>,
}))

vi.mock('../navigationItem/index.js', () => ({
  __esModule: true,
  NavigationItem: () => <li>[NavigationItem]</li>,
}))

vi.mock('../navigationSubMenu/index.js', () => ({
  __esModule: true,
  NavigationSubMenu: () => <li>[NavigationSubMenu]</li>,
}))

vi.mock('@mono/data', () => ({
  __esModule: true,
  client: vi.fn(),
  getGeneralInfo: vi.fn(),
  getSiteMetadata: vi.fn(() => ({
    metadata: {
      title: '',
      description: 'Default description',
      base_url: 'https://example.com',
    },
    error: undefined,
  })),
}))

const getGeneralInfoMock = vi.mocked(getGeneralInfo)

describe('Concert component', () => {
  it('shows all the data', async () => {
    getGeneralInfoMock.mockResolvedValueOnce({
      data: mockMenuData,
      error: undefined,
    })

    const Resolved = await resolvedComponent(Navigation, {})

    const { container } = render(<Resolved />)

    expect(container).toMatchSnapshot()
  })
})
