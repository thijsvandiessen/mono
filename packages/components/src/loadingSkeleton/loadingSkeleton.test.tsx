import { describe, expect, it } from 'vitest'
import { LoadingSkeleton } from './loadingSkeleton.jsx'
import React from 'react'
import { render } from '@testing-library/react'

describe('Loading skeleton component', () => {
  it('should render', () => {
    const { container } = render(<LoadingSkeleton />)
    expect(container).toMatchSnapshot()
  })
})
