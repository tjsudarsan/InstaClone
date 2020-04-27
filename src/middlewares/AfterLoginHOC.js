/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const AfterLoginHOC = (ComposedComponent, isLoggedIn) => class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn,
    };
  }

  render() {
    return this.state.isLoggedIn ? <ComposedComponent {...this.props} /> : <Redirect to="/" />;
  }
};

export default AfterLoginHOC;
