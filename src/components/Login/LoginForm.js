import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../Button';
import InputField from '../InputField';
import Alert from '../Alert';


class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailId: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.emailId && this.state.password) {
      this.props.onSubmit({
        emailId: this.state.emailId,
        password: this.state.password,
      });
    } else {
      alert('Invalid Username or password');
    }
  }

  render() {
    return (
      <>
        <Alert show={!!this.props.formError} type="danger" message={this.props.formError} />
        <form className="w-75 text-center" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <InputField
              type="email"
              className="form-control"
              placeholder="Email Address"
              onChange={(emailId) => this.setState({ emailId })}
            />
          </div>
          <div className="form-group">
            <InputField
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(password) => this.setState({ password })}
            />
          </div>
          <Button
            type="submit"
            className="btn btn-sm btn-primary px-4"
            disabled={!(this.state.emailId && this.state.password)}
            loading={this.props.formLoading}
            loadingText="Logging In..."
          >
            Sign In
          </Button>
        </form>
      </>
    );
  }
}

LoginForm.defaultProps = {
  formLoading: false,
  formError: null,
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formLoading: PropTypes.bool,
  formError: PropTypes.string,
};

const mapStateToProps = (state) => ({
  formLoading: state.auth.formLoading,
  formError: state.auth.formError,
});

export default connect(mapStateToProps)(LoginForm);
