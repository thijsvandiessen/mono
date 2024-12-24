import React from 'react';

type Hit = {
  image: string;
  title: string;
  categories: string[];
  price: number;
};

type Props = {
  hit: Hit
}

export const Hit = ({ hit }: Props) => {

  return (
    <article>
      <h1>{hit.title}</h1>
      <p>${hit.price}</p>
    </article>
  );
}