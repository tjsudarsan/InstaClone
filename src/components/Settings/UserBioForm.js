import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InputField from '../InputField';
import TextArea from '../TextArea';
import Button from '../Button';

class UserBioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.userData.username,
      bio: props.userData.bio,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, bio } = this.state;
    if (username) {
      this.props.onSubmit({
        username, bio,
      });
    } else {
      alert('Pease Enter your Username');
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
            value={this.props.userData.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailAddress">Email Address</label>
          <InputField
            id="emailAddress"
            type="email"
            placeholder="Your Email Address"
            value={this.props.userData?.emailId}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <TextArea
            id="bio"
            placeholder="Something about you.."
            onChange={(value) => this.setState({ bio: value })}
            value={this.props.userData.bio}
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
  userData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userData: state.auth.userData,
});

export default connect(mapStateToProps)(UserBioForm);
