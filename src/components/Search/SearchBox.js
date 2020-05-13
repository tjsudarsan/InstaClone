import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import InputField from '../InputField';
import { searchUsers } from '../../redux/actions/actions-search';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
  }

  handleSearch = (value) => {
    this.setState({
      searchText: value,
    });
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter' && this.state.searchText) {
      this.props.searchUsers(this.state.searchText);
    }
  }

  render() {
    return (
      <div className="search-box">
        <InputField
          placeholder="Type to search. Eg: Walter White"
          value={this.state.searchText}
          onChange={this.handleSearch}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

SearchBox.defaultProps = {};

SearchBox.propTypes = {
  searchUsers: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (searchText) => dispatch(searchUsers(searchText)),
});

export default connect(null, mapDispatchToProps)(SearchBox);
