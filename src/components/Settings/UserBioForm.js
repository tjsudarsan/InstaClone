import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputField from '../InputField';
import TextArea from '../TextArea';
import Button from '../Button';

class UserBioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      emailId: '',
      bio: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, emailId, bio } = this.state;
    if (username && emailId && bio) {
      this.props.onSubmit({
        username, emailId, bio,
      });
    }
  }

  render() {
    return (
      <form className="bio-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <InputField
            id="username"
            placeholder="Choose your username"
            onChange={(value) => this.setState({ username: value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailAddress">Email Address</label>
          <InputField
            id="emailAddress"
            type="email"
            placeholder="Your Email Address"
            onChange={(value) => this.setState({ emailId: value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <TextArea
            id="bio"
            placeholder="Something about you.."
            onChange={(value) => this.setState({ bio: value })}
          />
        </div>
        <Button
          type="submit"
        >
          Save
        </Button>
      </form>
    );
  }
}

UserBioForm.defaultProps = {};

UserBioForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserBioForm;
