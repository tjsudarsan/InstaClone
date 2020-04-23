import React from 'react';
import LayoutContent from '../components/LayoutContent';
import FollowRequests from '../components/Notifications/FollowRequests';
import PostNotifications from '../components/Notifications/PostNotifications';

import '../styles/Notifications.scss';

const Notifications = (props) => (
  <LayoutContent>
    <FollowRequests />
    <PostNotifications />
  </LayoutContent>
);

export default Notifications;
