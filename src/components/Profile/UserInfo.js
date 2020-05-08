import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../Button';

import dpPlaceholder from '../../assets/profile-placeholder.jpg';

import { logout } from '../../redux/actions/actions-auth';

const UserInfo = ({
  userData: {
    username,
    followers,
    following,
    bio,
    profilePic,
    posts,
  },
  ...props
}) => (
  <div className="row user-info">
    <div className="col-12 col-md-4">
      <img src={profilePic || dpPlaceholder} alt="" className="dp-image" />
    </div>
    <div className="col-12 col-md-8">
      <div className="d-flex align-items-center">
        <h3 className="username">
          {username}
        </h3>
        <Button onClick={props.logout} className="btn btn-sm btn-outline-secondary ml-3">Logout</Button>
      </div>
      <div className="stats">
        <div className="stat-item">
          <h4>{posts}</h4>
          <span>Posts</span>
        </div>
        <div className="stat-item">
          <h4>{followers}</h4>
          <span>Followers</span>
        </div>
        <div className="stat-item">
          <h4>{following}</h4>
          <span>Followings</span>
        </div>
      </div>
      <div className="user-bio">
        <p>{bio || 'User has no bio'}</p>
      </div>
      <div className="action-btns">
        <Button className="btn btn-sm btn-primary px-5">Follow</Button>
      </div>
    </div>
  </div>
);

UserInfo.propTypes = {
  logout: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userData: state.auth.userData,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
