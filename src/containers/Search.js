import React from 'react';
import LayoutContent from '../components/LayoutContent';

import SearchBox from '../components/Search/SearchBox';
import SearchResults from '../components/Search/SearchResults';

import '../styles/Seach.scss';

const Search = () => (
  <LayoutContent>
    <h5 className="mb-3">Search your friends</h5>
    <SearchBox />
    <hr />
    <SearchResults />
  </LayoutContent>
);

export default Search;
