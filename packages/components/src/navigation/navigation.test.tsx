import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navigation } from './navigation.js'
import React from 'react'
import { getGeneralInfo } from '@mono/data'
import { mockMenuData } from './mocks/mockMenuData.js'
import { resolvedComponent } from '@mono/utils'

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

vi.mock('@mono/data', () => ({
  ...vi.importActual('@mono/data'),
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
    expect(screen.getByText('contact')).toBeTruthy()
  })
})
