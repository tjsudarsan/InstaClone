import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputField from '../InputField';
import Button from '../Button';

import { auth, credentails } from '../../lib/firebase';
import { logout } from '../../redux/actions/actions-auth';

class ChangePasswordForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPassword: '',
      isCurrentPasswordValid: false,
      newPassword: '',
      repeatPassword: '',
      errorMessage: '',
    };
  }

  validateCurrentPassword = async () => {
    try {
      const user = auth.currentUser;
      const credentials = credentails(user.email, this.state.currentPassword);
      await user.reauthenticateWithCredential(credentials);
      this.setState({
        isCurrentPasswordValid: true,
      });
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          this.setState({
            errorMessage: 'Wrong Password',
          });
          break;
        case 'auth/too-many-requests':
          this.setState({
            errorMessage: 'Too many attempts! Please try again later.',
          });
          break;
        default:
          console.log(error);
          return null;
      }
    }
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.validateCurrentPassword();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { isCurrentPasswordValid, newPassword, repeatPassword } = this.state;
    if (isCurrentPasswordValid) {
      if (newPassword && repeatPassword) {
        if (newPassword === repeatPassword) {
          auth.currentUser.updatePassword(newPassword);
          alert('Password Changed Successfully');
          this.setState({
            currentPassword: '',
            isCurrentPasswordValid: false,
            newPassword: '',
            repeatPassword: '',
            errorMessage: '',
          });
        } else {
          alert("Password doesn't match!");
        }
      } else {
        alert('Enter New and Repeat Password');
      }
    }
  }

  render() {
    return (
      <form className="change-pwd-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <InputField
            type="password"
            placeholder="Current Password"
            value={this.state.currentPassword}
            onChange={(value) => this.setState({ currentPassword: value, errorMessage: '' })}
            onKeyDown={this.handleKeyDown}
          />
          <small className="text-muted">
            Enter your current password and press
            {' '}
            <b>Enter</b>
          </small>
          {this.state.errorMessage && (
            <>
              <span className="text-danger">{this.state.errorMessage}</span>
              <Button onClick={() => this.props.logout('/reset-password')}>Reset Password</Button>
            </>
          )}
        </div>
        {this.state.isCurrentPasswordValid && (
          <>
            <div className="form-group">
              <InputField
                type="password"
                placeholder="New Password"
                onChange={(value) => this.setState({ newPassword: value, repeatPassword: '' })}
              />
            </div>
            <div className="form-group">
              <InputField
                type="password"
                placeholder="Repeat Password"
                value={this.state.repeatPassword}
                disabled={!this.state.newPassword}
                onChange={(value) => this.setState({ repeatPassword: value })}
              />
            </div>
            <Button
              type="submit"
              disabled={!(this.state.newPassword && this.state.repeatPassword) || (this.state.newPassword !== this.state.repeatPassword)}
            >
              Change Password
            </Button>
          </>
        )}
      </form>
    );
  }
}

ChangePasswordForm.defaultProps = {};

ChangePasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logout: (redirectPath) => dispatch(logout(redirectPath)),
});

export default connect(null, mapDispatchToProps)(ChangePasswordForm);
