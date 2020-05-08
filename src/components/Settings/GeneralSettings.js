import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import UserBioForm from './UserBioForm';
import { auth, db } from '../../lib/firebase';

class GeneralSettings extends Component {
  handleSaveSettings = (formData) => {
    db.collection('users').doc(auth.currentUser.uid).update({
      ...formData,
    });
  }

  render() {
    return (
      <div className="settings-item general-settings">
        <h5>General Settings</h5>
        <hr />
        <UserBioForm onSubmit={this.handleSaveSettings} />
      </div>
    );
  }
}

GeneralSettings.defaultProps = {};

GeneralSettings.propTypes = {};

export default GeneralSettings;
