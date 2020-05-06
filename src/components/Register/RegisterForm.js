import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../Button';
import InputField from '../InputField';
import Alert from '../Alert';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      emailId: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name, password, emailId,
    } = this.state;
    if (name && password && emailId) {
      this.props.onSubmit({
        name, password, emailId,
      });
    } else {
      alert('Fill up all fields!');
    }
  }

  render() {
    return (
      <>
        <Alert show={!!this.props.formError} type="danger" message={this.props.formError} />
        <form className="w-75 text-center" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <InputField
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              onChange={(name) => this.setState({ name })}
            />
          </div>
          <div className="form-group">
            <InputField
              type="email"
              className="form-control"
              placeholder="your-email-id@example.com"
              onChange={(emailId) => this.setState({ emailId })}
            />
          </div>
          <div className="form-group">
            <InputField
              type="password"
              className="form-control"
              placeholder="**********"
              onChange={(password) => this.setState({ password })}
            />
          </div>
          <div className="form-group">
            <Button
              type="submit"
              loading={this.props.formLoading}
              loadingText="Registering..."
              className="btn btn-sm btn-success px-4"
            >
              Register
            </Button>
          </div>
        </form>
      </>
    );
  }
}

RegisterForm.defaultProps = {
  formLoading: false,
  formError: null,
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formLoading: PropTypes.bool,
  formError: PropTypes.string,
};

const mapStateToProps = (state) => ({
  formLoading: state.auth.formLoading,
  formError: state.auth.formError,
});

export default connect(mapStateToProps)(RegisterForm);
