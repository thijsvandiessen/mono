import React from 'react';
import { render } from '@testing-library/react';
import { Hit } from './hit';

describe('Hit component', () => {
  const hit = {
    image: 'image-url',
    title: 'Test Title',
    categories: ['Category 1', 'Category 2'],
    price: 100,
  };

  it('renders the title', () => {
    const { getByText } = render(<Hit hit={hit} />);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the price', () => {
    const { getByText } = render(<Hit hit={hit} />);
    expect(getByText('$100')).toBeInTheDocument();
  });
});