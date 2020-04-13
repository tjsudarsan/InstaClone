import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../components/Login/LoginForm';

// SCSS Style File of Login
import '../styles/Login.scss';

class Login extends Component {
  handleSubmit = (formData) => {
    console.log(formData);
  }

  render() {
    return (
      <div className="row align-items-center justify-content-center login-container">
        <div className="d-none d-md-block col-md-8 text-center info-container">
          <h1>Instagram</h1>
        </div>
        <div className="col-12 col-md-4  login-form-container">
          <h1 className="d-block d-md-none text-primary display-4">Instagram</h1>
          <h3>Login</h3>
          <p className="text-center">Start sharing your moments with your loved ones!</p>
          <LoginForm onSubmit={this.handleSubmit} />
          <hr className="w-100" />
          <p>
            Didn&apos;t have an account?
            &nbsp;
            <b>Join our community!</b>
          </p>
          <Link
            to="/register"
            className="btn btn-sm btn-success w-25 mx-auto"
          >
            Sign Up
          </Link>
          <Link to="/reset-password" className="mt-5 btn btn-sm btn-link">Trouble Logging?</Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
};

export default Login;
