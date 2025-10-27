import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NavigationSubMenuItem } from '../navigationSubMenuItem/index.js'

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

describe('NavigationSubMenuItem', () => {
  it('should render a link', () => {
    const { container } = render(
      <NavigationSubMenuItem
        onClick={() => null}
        slug={'url'}
        label={'homepage'}
      />
    )

    expect(screen.getByRole('link', { name: 'homepage' })).toBeVisible()
    expect(container).toMatchSnapshot()
  })

  it('should render a link warning', () => {
    render(<NavigationSubMenuItem onClick={() => null} />)

    expect(screen.getByText('No link specified')).toBeVisible()
  })

  it('should render a label warning', () => {
    render(<NavigationSubMenuItem onClick={() => null} slug={'test'} />)

    expect(screen.getByText('No label specified')).toBeVisible()
  })
})
