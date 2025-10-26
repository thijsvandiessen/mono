import { describe, expect, it, vi } from 'vitest'
import { DefaultLayout } from './defaultLayout.jsx'
import { render } from '@testing-library/react'

vi.mock('../navigation/index.js', () => {
  const originalModule = vi.importActual<
    typeof import('../navigation/index.js')
  >('../navigation/index.js')
  return {
    ...originalModule,
    Navigation: vi.fn(() => <nav>[Navigation]</nav>),
  }
})

vi.mock('../footer/index.js', () => {
  const originalModule =
    vi.importActual<typeof import('../footer/index.js')>('../footer/index.js')
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
