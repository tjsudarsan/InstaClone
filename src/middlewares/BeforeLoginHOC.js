/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const BeforeLoginHOC = (ComposedComponent, isLoggedIn) => class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn,
    };
  }

  render() {
    return this.state.isLoggedIn ? <Redirect to="/feeds" /> : <ComposedComponent {...this.props} />;
  }
};

export default BeforeLoginHOC;
