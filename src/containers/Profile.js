import React from 'react';
import { Redirect } from 'react-router-dom';
import LayoutContent from '../components/LayoutContent';
import UserInfo from '../components/Profile/UserInfo';
import Posts from '../components/Profile/Posts';

// Styles
import '../styles/Profile.scss';

const Profile = (props) => {
  if (false) {
    return <Redirect to="/404" />;
  }
  return (
    <LayoutContent>
      <UserInfo />
      <hr />
      <Posts />
    </LayoutContent>
  );
};

export default Profile;
