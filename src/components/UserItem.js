import React from 'react';
import PropTypes from 'prop-types';

import dpPlaceholder from '../assets/profile-placeholder.jpg';

const UserItem = ({
  username,
  bio,
  profilePic,
  ...props
}) => (
  <div role="presentation" onClick={props.onClick} className={`user-card ${props.enableHover ? 'hover' : ''}`}>
    <div className="dp-image-wrapper">
      <img className="dp-image" src={profilePic || dpPlaceholder} alt="" />
    </div>
    <div className="info">
      <h5>{username}</h5>
      <p>{bio}</p>
    </div>
    {props.actionBtns && (
      <div className="action-btns">
        {props.actionBtns}
      </div>
    )}
  </div>
);

UserItem.defaultProps = {
  onClick: () => {},
  actionBtns: null,
  enableHover: false,
  bio: null,
  profilePic: null,
};

UserItem.propTypes = {
  onClick: PropTypes.func,
  actionBtns: PropTypes.any,
  enableHover: PropTypes.bool,
  username: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profilePic: PropTypes.string,
};

export default UserItem;
