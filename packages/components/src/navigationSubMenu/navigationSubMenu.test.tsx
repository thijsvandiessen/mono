import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { NavigationSubMenu } from '../navigationSubMenu/index.js'
import React from 'react'
import type { NavigationItem } from '@mono/data'

const mockData: NavigationItem[] = [
  {
    id: '194164582',
    label: 'specific page',
    slug: 'specific/page',
  },
  {
    id: '194164583',
    label: 'homepage',
    slug: 'homepage',
  },
  {
    id: '194164584',
    label: 'external',
    slug: 'https://example.com',
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
