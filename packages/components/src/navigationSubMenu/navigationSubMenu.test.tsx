import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { NavigationSubMenu } from '../navigationSubMenu/index.js'
import React from 'react'

const mockData = [
  {
    id: '194164582',
    label: 'specific page',
    link: { slug: 'specific/page' },
  },
  {
    id: '194164583',
    label: 'homepage',
    link: { slug: 'homepage', title: 'home' },
  },
  {
    id: '194164584',
    label: 'external',
    link: { slug: 'https://example.com' },
  },
]

describe('navigationSubMenu', () => {
  it('should render a button', () => {
    const { container } = render(
      <NavigationSubMenu label="root label" item={JSON.stringify(mockData)} />
    )

    expect(screen.getByRole('button', { name: 'root label' })).toBeVisible()
    expect(container).toMatchSnapshot()

    fireEvent(
      screen.getByRole('button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(screen.getByRole('link', { name: 'specific page' })).toHaveAttribute(
      'href',
      '/specific/page'
    )
    expect(container).toMatchSnapshot()
  })
})
