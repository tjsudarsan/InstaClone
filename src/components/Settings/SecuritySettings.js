import React from 'react';
import ChangePasswordForm from './ChangePasswordForm';
// import PropTypes from 'prop-types';

const SecuritySettings = () => (
  <div className="settings-item security-settings">
    <h5>Security Settings</h5>
    <hr />
    <p>Change Password</p>
    <ChangePasswordForm />
  </div>
);

SecuritySettings.defaultProps = {};

SecuritySettings.propTypes = {};

export default SecuritySettings;
