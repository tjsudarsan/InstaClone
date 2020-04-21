import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import Button from '../Button';

class ChangePasswordForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCurrentPasswordValid: false,
      newPassword: '',
      repeatPassword: '',
    };
  }

  validateCurrentPassword = (value) => {
    this.setState({
      isCurrentPasswordValid: value === 'example',
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { isCurrentPasswordValid, newPassword, repeatPassword } = this.state;
    if (isCurrentPasswordValid) {
      if (newPassword && repeatPassword) {
        if (newPassword === repeatPassword) {
          this.props.onSubmit({
            password: newPassword,
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
            onChange={this.validateCurrentPassword}
          />
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
};

export default ChangePasswordForm;
