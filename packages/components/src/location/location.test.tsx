import React from 'react'
import { Location, type Props } from './location'
import { getLocation } from '@mono/graphql'
import { resolvedComponent } from '@mono/utils'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

vi.mock('@mono/graphql', () => {
  const originalModule = vi.importActual('@mono/graphql')
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
