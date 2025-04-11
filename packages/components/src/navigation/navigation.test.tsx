import { Navigation } from './navigation'
import React from 'react'
import { getGeneralInfo } from '@mono/data'
import { mockMenuData } from './mocks/mockMenuData'
import { resolvedComponent } from '@mono/utils'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

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
