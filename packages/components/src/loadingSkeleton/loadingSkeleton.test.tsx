import React from 'react'
import { LoadingSkeleton } from './loadingSkeleton'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Loading skeleton component', () => {
  it('should render', () => {
    const { container } = render(<LoadingSkeleton />)
    expect(container).toMatchSnapshot()
  })
})
