import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../Button';

import dpPlaceholder from '../../assets/profile-placeholder.jpg';

import { logout } from '../../redux/actions/actions-auth';

const UserInfo = (props) => (
  <div className="row user-info">
    <div className="col-12 col-md-4">
      <img src={dpPlaceholder} alt="" className="dp-image" />
    </div>
    <div className="col-12 col-md-8">
      <div className="d-flex align-items-center">
        <h3 className="username">
          {props.username}
        </h3>
        <Button onClick={props.logout} className="btn btn-sm btn-outline-secondary ml-3">Logout</Button>
      </div>
      <div className="stats">
        <div className="stat-item">
          <h4>50</h4>
          <span>Posts</span>
        </div>
        <div className="stat-item">
          <h4>300</h4>
          <span>Followers</span>
        </div>
        <div className="stat-item">
          <h4>100</h4>
          <span>Followings</span>
        </div>
      </div>
      <div className="user-bio">
        <p>Est enim minim culpa in. Ullamco commodo velit nisi cupidatat officia aliquip commodo. Cupidatat adipisicing deserunt voluptate minim voluptate aliquip qui sint amet nulla sit sint ullamco. Commodo excepteur mollit velit mollit labore do enim. Nisi reprehenderit excepteur veniam sunt cupidatat duis adipisicing nisi. Consectetur esse consectetur nostrud excepteur velit anim fugiat nulla nisi et.</p>
      </div>
      <div className="action-btns">
        <Button className="btn btn-sm btn-primary px-5">Follow</Button>
      </div>
    </div>
  </div>
);

UserInfo.propTypes = {
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  username: state.auth.userData?.displayName,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
