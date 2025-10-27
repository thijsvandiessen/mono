import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NavigationItem } from '../navigationItem/index.js'

describe('NavigationItem', () => {
  it('should render a link', () => {
    const { container } = render(
      <NavigationItem slug={'url'} label={'homepage'} />
    )

    expect(screen.getByRole('link', { name: 'homepage' }))
    expect(container).toMatchSnapshot()
  })

  it('should render a link warning', () => {
    render(<NavigationItem />)

    expect(screen.getByText('No link specified'))
  })

  it('should render a label warning', () => {
    render(<NavigationItem slug={'test'} />)

    expect(screen.getByText('No label specified'))
  })
})
