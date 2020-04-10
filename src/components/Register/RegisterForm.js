import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import InputField from '../InputField';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      emailId: '',
      password: '',
      mobileNumber: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name, password, emailId, mobileNumber,
    } = this.state;
    if (name && password && emailId && mobileNumber) {
      if (String(mobileNumber).length === 10) {
        this.props.onSubmit({
          name, password, emailId, mobileNumber,
        });
      } else {
        alert('Invalid Mobile Number');
      }
    } else {
      alert('Fill up all fields!');
    }
  }

  render() {
    return (
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
            type="number"
            className="form-control"
            placeholder="Mobile No"
            onChange={(mobileNumber) => this.setState({ mobileNumber })}
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
          <Button type="submit" className="btn btn-sm btn-success px-4">Register</Button>
        </div>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
