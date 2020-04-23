import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import UserItem from '../UserItem';

const SearchResults = (props) => (
  <div className="search-results row">
    {new Array(10).fill(null).map((searchItem) => (
      <div className="col-12 col-md-4 search-item">
        <UserItem
          enableHover
          onClick={() => props.history.push('/tjsudarsan')}
        />
      </div>
    ))}
  </div>
);

SearchResults.defaultProps = {
};

SearchResults.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SearchResults);
