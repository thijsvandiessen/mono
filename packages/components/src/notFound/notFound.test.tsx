import React from 'react'
import { render } from '@testing-library/react'
import { NotFound } from './notFound'
import { describe, it, expect } from 'vitest'

describe('NotFound component', () => {
  it('shows all the data', () => {
    const { container } = render(<NotFound />)
    expect(container).toMatchSnapshot()
  })
})
