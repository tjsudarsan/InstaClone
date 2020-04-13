import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import InputField from '../InputField';
import Button from '../Button';

class SendResetLinkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailId: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.emailId) {
      this.props.onSubmit({ emailId: this.state.emailId });
    }
  }

  render() {
    return (
      <form className="w-75 text-center" onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <InputField
            type="email"
            className="form-control"
            placeholder="Email Address"
            onChange={(value) => this.setState({ emailId: value })}
          />
          <div className="input-group-append">
            <Button className="btn btn-outline-primary" type="submit">Send</Button>
          </div>
        </div>
        <small className="text-muted">An reset password link will be sent to this email!</small>
      </form>
    );
  }
}

SendResetLinkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SendResetLinkForm;
