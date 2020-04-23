import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import InputField from '../InputField';

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
    }, () => {
      // Call the server
    });
  }

  render() {
    return (
      <div className="search-box">
        <InputField
          placeholder="Type to search. Eg: Walter White"
          value={this.state.searchText}
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}

SearchBox.defaultProps = {};

SearchBox.propTypes = {};

export default SearchBox;
