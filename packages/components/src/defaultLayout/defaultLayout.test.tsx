import { describe, expect, it, vi } from 'vitest'
import { DefaultLayout } from './defaultLayout.jsx'
import { mockMenuData } from '../navigation/mocks/mockMenuData.js'
import { render } from '@testing-library/react'

vi.mock('../navigation/index.js', () => {
  return {
    _esModule: true,
    Navigation: vi.fn(() => <nav>[Navigation]</nav>),
  }
})

vi.mock('../footer/index.js', () => {
  return {
    _esModule: true,
    Footer: vi.fn(() => <footer>[Footer]</footer>),
  }
})

describe('Default layout', () => {
  it('shows all the data', () => {
    const { container } = render(
      <DefaultLayout
        data={mockMenuData}
        metadata={{
          title: 'title',
          description: 'description',
          base_url: 'https://example.com',
          socials: [],
        }}
      >
        <div>main content</div>
      </DefaultLayout>
    )
    expect(container).toMatchSnapshot()
  })
})
