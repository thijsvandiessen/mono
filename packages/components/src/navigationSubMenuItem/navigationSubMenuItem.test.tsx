import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NavigationSubMenuItem } from '../navigationSubMenuItem'
import React from 'react'

describe('NavigationSubMenuItem', () => {
  it('should render a link', () => {
    const { container } = render(
      <NavigationSubMenuItem
        onClick={() => null}
        slug={'url'}
        label={'homepage'}
      />
    )

    expect(screen.getByRole('link', { name: 'homepage' }))
    expect(container).toMatchSnapshot()
  })

  it('should render a link warning', () => {
    render(<NavigationSubMenuItem onClick={() => null} />)

    expect(screen.getByText('No link specified'))
  })

  it('should render a label warning', () => {
    render(<NavigationSubMenuItem onClick={() => null} slug={'test'} />)

    expect(screen.getByText('No label specified'))
  })
})
