import React from 'react';
// import PropTypes from 'prop-types';
import SwitchToggle from '../SwitchToggle';

const PrivacySettings = (props) => (
  <div className="settings-item privacy-settings">
    <h5>Privacy Settings</h5>
    <hr />
    <SwitchToggle
      label="Private"
      onChange={(checked) => console.log(checked)}
    />
  </div>
);

PrivacySettings.defaultProps = {};

PrivacySettings.propTypes = {};

export default PrivacySettings;
