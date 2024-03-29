import React from 'react'
import { Location } from './location'
import type { Props } from './location'
import { getLocation } from '@crea/graphql/src/getters/getLocation'
import { resolvedComponent } from '@crea/utils/src/testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'

jest.mock('@crea/graphql/src/getters/getLocation', () => {
  const originalModule = jest.requireActual(
    '@crea/graphql/src/getters/getLocation'
  )
  return {
    __esModule: true,
    ...originalModule,
    getLocation: jest.fn(),
  }
})

const getLocationMock = jest.mocked(getLocation)

describe('Concert component', () => {
  it('shows all the data', async () => {
    getLocationMock.mockResolvedValueOnce({
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
