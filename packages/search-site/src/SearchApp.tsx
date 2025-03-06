import React from 'react';
import { Hit } from './hit';
import { searchClient } from './searchClient'
import { InstantSearch, RefinementList, SearchBox, Breadcrumb } from 'react-instantsearch';

type Props = {
  indexName: string;
};


export const SearchApp = ({ indexName }: Props) => {
  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}
      routing={true}
      insights={false}
    >
      <SearchBox />

      <Hit />

      <Breadcrumb
        attributes={[
          'categories.lvl0',
          'categories.lvl1',
          'categories.lvl2'
        ]}
      />

      <RefinementList
        attribute="title"
        searchable={true}
        searchablePlaceholder="Search"
        showMore={true}
      />
    </InstantSearch>
  );
}