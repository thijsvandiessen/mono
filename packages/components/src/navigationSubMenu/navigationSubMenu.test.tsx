import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NavigationSubMenu } from './index.js'
import React from 'react'
import { mockData } from './mocks/mockData.js'

vi.mock('../navigationSubMenuItem/index.js', () => ({
  __esModule: true,
  NavigationSubMenuItem: () => <li>[NavigationSubMenuItem]</li>,
}))

vi.mock('@mono/next-js', () => {
  return {
    _esModule: true,
    Link: vi.fn(({ href, onClick, className, children }) => (
      <a className={className} href={href} onClick={onClick}>
        {children}
      </a>
    )),
  }
})

vi.mock('@mono/hooks', () => ({
  __esModule: true,
  useEscapeKey: vi.fn(),
  useOutsideClick: vi.fn(),
}))

describe('navigationSubMenu', () => {
  it('should render a button', () => {
    const { container } = render(
      <NavigationSubMenu label="root label" item={JSON.stringify(mockData)} />
    )

    expect(screen.getByRole('button', { name: 'root label' })).toBeVisible()
    expect(container).toMatchSnapshot()
  })
})
