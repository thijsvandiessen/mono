import { describe, expect, it, vi } from 'vitest'
import { DefaultLayout } from './defaultLayout.jsx'
import { render } from '@testing-library/react'

vi.mock('../navigation', () => {
  const originalModule = vi.importActual('../navigation')
  return {
    ...originalModule,
    Navigation: vi.fn(() => <nav>[Navigation]</nav>),
  }
})

vi.mock('../footer', () => {
  const originalModule = vi.importActual('../footer')
  return {
    ...originalModule,
    Footer: vi.fn(() => <footer>[Footer]</footer>),
  }
})

describe('Default layout', () => {
  it('shows all the data', () => {
    const { container } = render(
      <DefaultLayout>
        <div>main content</div>
      </DefaultLayout>
    )
    expect(container).toMatchSnapshot()
  })
})
