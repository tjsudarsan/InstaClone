/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const AfterLoginHOC = (ComposedComponent) => class extends Component {
  constructor(props) {
    super(props);

    const isLoggedIn = window.localStorage.getItem('isLoggedIn');

    this.state = {
      isLoggedIn: isLoggedIn === 'true',
    };
  }

  render() {
    return this.state.isLoggedIn ? <ComposedComponent {...this.props} /> : <Redirect to="/" />;
  }
};

export default AfterLoginHOC;
