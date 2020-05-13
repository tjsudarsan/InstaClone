import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UserItem from '../UserItem';
import Loader from '../Loader';
import Alert from '../Alert';

const SearchResults = ({
  loading,
  error,
  list,
  ...props
}) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Alert show={!!error} type="danger" message={error} />;
  }

  return (
    <div className="search-results row">
      {list.map((searchItem) => (
        <div key={searchItem.uid} className="col-12 col-md-4 search-item">
          <UserItem
            {...searchItem}
            enableHover
            onClick={() => props.history.push(`/${searchItem.username}`)}
          />
        </div>
      ))}
    </div>
  );
};

SearchResults.defaultProps = {
  loading: false,
  error: null,
  list: [],
};

SearchResults.propTypes = {
  history: PropTypes.object.isRequired,
  list: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  loading: state.search.loading,
  error: state.search.error,
  list: state.search.searchList,
});

export default withRouter(connect(mapStateToProps)(SearchResults));
