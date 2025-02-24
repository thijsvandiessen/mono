import React from 'react';
import { useInfiniteHits } from 'react-instantsearch';


export const Hit = () => {
  const { currentPageHits } = useInfiniteHits();

  return currentPageHits.map((hit) => (
    <article key={hit.objectID}>
      <h1><a href={hit.url}>{hit.title}</a></h1>
    </article >
  ));
}