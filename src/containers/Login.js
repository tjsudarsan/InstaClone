import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import LoginForm from '../components/Login/LoginForm';

import { login } from '../redux/actions/actions-auth';

// SCSS Style File of Login
import '../styles/Login.scss';

const Login = (props) => (
  <div className="row align-items-center justify-content-center login-container">
    <div className="d-none d-md-block col-md-8 text-center info-container">
      <h1>Instagram</h1>
    </div>
    <div className="col-12 col-md-4  login-form-container">
      <h1 className="d-block d-md-none text-primary display-4">Instagram</h1>
      <h3>Login</h3>
      <p className="text-center">Start sharing your moments with your loved ones!</p>
      <LoginForm onSubmit={props.login} />
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispathToProps = (dispatch) => ({
  login: (formData) => dispatch(login(formData)),
});

export default connect(null, mapDispathToProps)(Login);
