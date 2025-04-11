import {
  Breadcrumb,
  Hits,
  InstantSearch,
  RefinementList,
  SearchBox,
} from 'react-instantsearch'
import { Hit } from './hit'
import React from 'react'
import { searchClient } from './searchClient'

export const SearchApp = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="test"
      routing={true}
      insights={false}
    >
      <SearchBox />

      <Hits hitComponent={Hit} />

      <Breadcrumb
        attributes={['categories.lvl0', 'categories.lvl1', 'categories.lvl2']}
      />

      <RefinementList
        attribute="brand"
        searchable={true}
        searchablePlaceholder="Search brands"
        showMore={true}
      />
    </InstantSearch>
  )
}
