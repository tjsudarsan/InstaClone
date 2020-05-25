import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../Button';

import { storage, db } from '../../lib/firebase';

import dpPlaceholder from '../../assets/profile-placeholder.jpg';

import { logout } from '../../redux/actions/actions-auth';
import { followAction } from '../../redux/actions/actions-profile';

const UserInfo = ({
  profileData,
  userData,
  isOtherUser,
  ...props
}) => {
  let details = profileData;

  if (isOtherUser) {
    details = userData;
  }

  const {
    username,
    followers,
    following,
    bio,
    profilePic,
    posts,
    uid,
    followBtnText,
  } = details;

  return (
    <div className="row user-info">
      <div className="col-12 col-md-4">
        {!isOtherUser && (
          <input
            id="profilePicUploader"
            type="file"
            className="d-none"
            onChange={(event) => {
              const file = event.target.files[0];
              const profilePicRef = storage.ref().child(`profilePics/${uid}`);
              profilePicRef.put(file).then(() => {
                profilePicRef.getDownloadURL().then((url) => {
                  db.collection('users').doc(uid).update({
                    profilePic: url,
                  });
                });
              });
            }}
            accept="image/png, image/jpeg"
          />
        )}
        <img
          role="presentation"
          onClick={() => {
            if (!isOtherUser) {
              document.getElementById('profilePicUploader').click();
            }
          }}
          src={profilePic || dpPlaceholder}
          alt=""
          className="dp-image"
        />
      </div>
      <div className="col-12 col-md-8">
        <div className="d-flex align-items-center">
          <h3 className="username">
            {username}
          </h3>
          {!isOtherUser && <Button onClick={props.logout} className="btn btn-sm btn-outline-secondary ml-3">Logout</Button> }
        </div>
        <div className="stats">
          <div className="stat-item">
            <h4>{posts}</h4>
            <span>Posts</span>
          </div>
          <div className="stat-item">
            <h4>{followers.length}</h4>
            <span>Followers</span>
          </div>
          <div className="stat-item">
            <h4>{following.length}</h4>
            <span>Followings</span>
          </div>
        </div>
        <div className="user-bio">
          <p>{bio || 'User has no bio'}</p>
        </div>
        <div className="action-btns">
          {isOtherUser && (
          <Button
            className="btn btn-sm btn-primary px-5"
            onClick={props.followAction}
          >
            {followBtnText}
          </Button>
          )}
        </div>
      </div>
    </div>
  );
};

UserInfo.defaultProps = {
  userData: null,
  isOtherUser: false,
};

UserInfo.propTypes = {
  logout: PropTypes.func.isRequired,
  profileData: PropTypes.object.isRequired,
  userData: PropTypes.object,
  isOtherUser: PropTypes.bool,
  followAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profileData: state.auth.userData,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  followAction: () => dispatch(followAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
