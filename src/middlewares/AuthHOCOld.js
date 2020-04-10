/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const AuthHOC = (ComposedComponent, path) => class extends Component {
  constructor(props) {
    super(props);

    const authStatus = window.localStorage.getItem('isLoggedIn');

    this.state = {
      authStatus: authStatus === 'true',
    };
  }

  render() {
    const isBeforeLoginPage = ['/', '/register', '/reset-password'].includes(path);

    let componentToBeRendered = <ComposedComponent {...this.props} />;

    if (isBeforeLoginPage && this.state.authStatus) {
      // When User Trying to Access Login, Register or Reset Password Page and He is already Logged In
      componentToBeRendered = <Redirect to="/feeds" />;
    } else if (!isBeforeLoginPage && !this.state.authStatus) {
      // When User Tries to Access other than Login, Register and Reset Password and He is not Logged In already.
      componentToBeRendered = <Redirect to="/" />;
    }

    // Above two conditions will fail due to below scenario
    // 1. When the User tries to Access Login, Register and Reset Password and He is not logged in already
    // 2. When the User tries to Access pages other than Login, Register and Reset Password and He is already Logged In

    return componentToBeRendered;
  }
};

export default AuthHOC;
