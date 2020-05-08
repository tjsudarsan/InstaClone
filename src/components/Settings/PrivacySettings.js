import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SwitchToggle from '../SwitchToggle';

import { db } from '../../lib/firebase';

const PrivacySettings = (props) => (
  <div className="settings-item privacy-settings">
    <h5>Privacy Settings</h5>
    <hr />
    <SwitchToggle
      label="Private"
      checked={props.userData.isPrivate}
      onChange={(checked) => {
        db.collection('users').doc(props.userData.uid).update({
          isPrivate: checked,
        });
      }}
    />
  </div>
);

PrivacySettings.defaultProps = {};

PrivacySettings.propTypes = {
  userData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userData: state.auth.userData,
});

export default connect(mapStateToProps)(PrivacySettings);
