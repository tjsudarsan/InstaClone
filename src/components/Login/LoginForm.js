import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailId: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
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
      <form className="w-75" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="emailId"
            className="form-control"
            placeholder="Email Address"
            value={this.state.emailId}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign In</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
