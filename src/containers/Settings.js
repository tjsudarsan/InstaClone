import React from 'react';
import LayoutContent from '../components/LayoutContent';

// Components
import GeneralSettings from '../components/Settings/GeneralSettings';
import PrivacySettings from '../components/Settings/PrivacySettings';
import SecuritySettings from '../components/Settings/SecuritySettings';

// Styles
import '../styles/Settings.scss';

const Settings = () => (
  <LayoutContent>
    <div className="settings">
      <GeneralSettings />
      <hr />
      <PrivacySettings />
      <hr />
      <SecuritySettings />
    </div>
  </LayoutContent>
);

export default Settings;
