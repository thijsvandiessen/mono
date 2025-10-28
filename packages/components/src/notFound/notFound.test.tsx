import { describe, expect, it, vi } from 'vitest'
import { NotFound } from './notFound.jsx'
import { render } from '@testing-library/react'

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

describe('NotFound component', () => {
  it('shows all the data', () => {
    const { container } = render(<NotFound />)
    expect(container).toMatchSnapshot()
  })
})
