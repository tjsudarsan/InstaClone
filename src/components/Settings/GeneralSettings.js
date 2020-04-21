import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserBioForm from './UserBioForm';

class GeneralSettings extends Component {
  handleSaveSettings = (formData) => {
    console.log(formData);
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
