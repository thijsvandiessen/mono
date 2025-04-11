import React from 'react'
import { Hit } from './hit'
import { searchClient } from './searchClient'
import {
  Breadcrumb,
  Hits,
  InstantSearch,
  RefinementList,
  SearchBox,
} from 'react-instantsearch'

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
