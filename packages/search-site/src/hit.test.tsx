import { Hit } from './hit.js'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Hit component', () => {
  const hit = {
    image: 'image-url',
    title: 'Test Title',
    categories: ['Category 1', 'Category 2'],
    price: 100,
  }

  it('renders the title', () => {
    render(<Hit hit={hit} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders the price', () => {
    render(<Hit hit={hit} />)
    const prices = screen.getAllByText(/\$\s*100/i)
    expect(prices).toHaveLength(2)
  })
})
