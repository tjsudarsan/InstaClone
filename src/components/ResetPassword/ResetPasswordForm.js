import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import InputField from '../InputField';
import Button from '../Button';
import Alert from '../Alert';

class ResetPasswordForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: '',
      repeatPassword: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newPassword && this.state.repeatPassword) {
      if (this.state.newPassword.length >= 6) {
        if (this.state.newPassword === this.state.repeatPassword) {
          this.props.onSubmit({
            password: this.state.newPassword,
          });
        }
      } else {
        alert('Minimum of 6 charcters should be entered');
      }
    }
  }

  render() {
    return (
      <>
        <Alert show={!!this.props.formError} type="danger" message={this.props.formError} />
        <Alert show={!!this.props.successMessage} type="success" message={this.props.successMessage} />
        <form className="w-75 text-center" onSubmit={this.handleSubmit}>
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
              onChange={(value) => this.setState({ repeatPassword: value })}
              value={this.state.repeatPassword}
              disabled={!this.state.newPassword}
            />
            <small className="text-muted">Minimum of 6 Charcters!</small>
          </div>
          <Button
            type="submit"
            className="btn btn-sm btn-outline-primary"
            disabled={!(this.state.newPassword && this.state.repeatPassword) || (this.state.newPassword !== this.state.repeatPassword)}
            loading={this.props.formLoading}
            loadingText="Resetting..."
          >
            Change
          </Button>
        </form>
      </>
    );
  }
}

ResetPasswordForm.defaultProps = {
  formLoading: false,
  formError: null,
  successMessage: null,
};

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formLoading: PropTypes.bool,
  formError: PropTypes.string,
  successMessage: PropTypes.string,
};

const mapStateToProps = (state) => ({
  formLoading: state.auth.formLoading,
  formError: state.auth.formError,
  successMessage: state.auth.successMessage,
});

export default connect(mapStateToProps)(ResetPasswordForm);
