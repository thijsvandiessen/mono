import { Location, type Props } from './location.js'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { getLocation } from '@mono/data'
import { resolvedComponent } from '@mono/utils'

vi.mock('@mono/data', () => {
  const originalModule = vi.importActual('@mono/data')
  return {
    __esModule: true,
    ...originalModule,
    getLocation: vi.fn(),
  }
})

const getLocationMock = vi.mocked(getLocation)

describe('Concert component', () => {
  it('shows all the data', async () => {
    getLocationMock.mockResolvedValue({
      data: {
        id: 'mock-ids',
        title: 'title',
        address: 'some address lines',
        lat: 5,
        lng: 42,
      },
      error: undefined,
    })

    const Resolved = await resolvedComponent<Props>(Location, {
      id: 'mock-id',
    })

    const { container } = render(<Resolved />)

    expect(container).toMatchSnapshot()
    expect(screen.getByText('title')).toBeTruthy()
  })
})
