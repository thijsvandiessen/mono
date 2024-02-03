import type { Props as EventListItemProps } from '../eventListItem'
import { FutureEvents } from './futureEvents'
import type { Props } from './futureEvents'
import React from 'react'
import { getFutureEvents } from '@crea/graphql/src/getters/getFutureEvents'
import { mockEvent } from './mocks/mockEvents'
import { resolvedComponent } from '@crea/utils/src/testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'

jest.mock('@crea/graphql/src/getters/getFutureEvents', () => {
  const originalModule = jest.requireActual(
    '@crea/graphql/src/getters/getFutureEvents'
  )
  return {
    __esModule: true,
    ...originalModule,
    getFutureEvents: jest.fn(),
  }
})

jest.mock('../eventListItem/eventListItem', () => {
  const originalModule = jest.requireActual('../eventListItem/eventListItem')
  return {
    __esModule: true,
    ...originalModule,
    EventListItem: ({ data }: EventListItemProps) => (
      <div>
        [Event]: <span>{data.id}</span>
      </div>
    ),
  }
})

const getFutureEventsMock = jest.mocked(getFutureEvents)

describe('FutureEvents component', () => {
  it('shows all the data', async () => {
    getFutureEventsMock.mockResolvedValue({
      data: [mockEvent],
      error: undefined,
    })

    const ResolvedFutureEvents = await resolvedComponent<Props>(FutureEvents, {
      skip: 0,
      first: 3,
    })

    const { container } = render(<ResolvedFutureEvents />)

    expect(container).toMatchSnapshot()
    expect(screen.getByText('mock-id')).toBeInTheDocument()
  })
})
