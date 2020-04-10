/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const BeforeLoginHOC = (ComposedComponent) => class extends Component {
  constructor(props) {
    super(props);

    const isLoggedIn = window.localStorage.getItem('isLoggedIn');

    this.state = {
      isLoggedIn: isLoggedIn === 'true',
    };
  }

  render() {
    return this.state.isLoggedIn ? <Redirect to="/feeds" /> : <ComposedComponent {...this.props} />;
  }
};

export default BeforeLoginHOC;
