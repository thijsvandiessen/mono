import { describe, expect, it } from 'vitest'
import { NotFound } from './notFound.jsx'
import React from 'react'
import { render } from '@testing-library/react'

describe('NotFound component', () => {
  it('shows all the data', () => {
    const { container } = render(<NotFound />)
    expect(container).toMatchSnapshot()
  })
})
