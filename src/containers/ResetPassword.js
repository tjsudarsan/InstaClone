import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

// Components
import SendResetLinkForm from '../components/ResetPassword/SendResetLinkForm';
import ResetPasswordForm from '../components/ResetPassword/ResetPasswordForm';

import { sendPassowordResetLink, resetPassword } from '../redux/actions/actions-auth';

// SCSS Style File of Login
import '../styles/ResetPassword.scss';

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    const queryString = new URLSearchParams(window.location.search);
    let token = null;
    if (queryString.has('token')) {
      token = queryString.get('token');
    }
    this.state = {
      show: token ? 'RESET_FORM' : 'EMAIL_FORM', // EMAIL_FORM or RESET_FORM
      token,
    };
  }


  handleSendPasswordLink = (formData) => {
    this.props.sendResetPasswordLink(formData.emailId);
  }

  handleResetPassowrd = (formData) => {
    const payload = {
      ...formData,
      token: this.state.token,
    };
    this.props.resetPassword(payload);
  }

  render() {
    return (
      <div className="row align-items-center justify-content-center reset-pwd-container">
        <div className="d-none d-md-block col-md-8 text-center info-container">
          <h1>Instagram</h1>
        </div>
        <div className="col-12 col-md-4 reset-pwd-form-container">
          <h1 className="d-block d-md-none text-primary display-4">Instagram</h1>
          <h3>Reset Password</h3>
          <p className="text-center">
            Got your account struck?
            <br />
            No problem we are here to help you out!
          </p>
          {/* Rendering Forms based on Token Exists */}
          {
            this.state.show === 'EMAIL_FORM'
              ? <SendResetLinkForm onSubmit={this.handleSendPasswordLink} />
              : <ResetPasswordForm onSubmit={this.handleResetPassowrd} />
          }
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
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  sendResetPasswordLink: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendResetPasswordLink: (emailId) => dispatch(sendPassowordResetLink(emailId)),
  resetPassword: (formData) => dispatch(resetPassword(formData)),
});

export default connect(null, mapDispatchToProps)(ResetPassword);
