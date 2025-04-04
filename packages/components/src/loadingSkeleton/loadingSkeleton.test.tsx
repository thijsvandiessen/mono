import { LoadingSkeleton } from './loadingSkeleton'
import React from 'react'
import { render } from '@testing-library/react'

describe('Loading skeleton component', () => {
  it('should render', () => {
    const { container } = render(<LoadingSkeleton />)
    expect(container).toMatchSnapshot()
  })
})
