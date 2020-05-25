import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LayoutContent from '../components/LayoutContent';
import UserInfo from '../components/Profile/UserInfo';
import Posts from '../components/Profile/Posts';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import { fetchUserDetails, clearData } from '../redux/actions/actions-profile';

// Styles
import '../styles/Profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { username } = props.match.params;

    if (username !== 'profile') {
      if (username !== state.username) {
        props.fetchUserDetails(username);
        return { username };
      }
    } else {
      props.clearProfileData();
    }

    return null;
  }

  render() {
    if (this.props.loading) {
      return <Loader />;
    }

    return (
      <LayoutContent>
        {this.props.error ? (
          <Alert show={!!this.props.error} type="danger" message={this.props.error} />
        ) : (
          <>
            <UserInfo isOtherUser={!!this.props.userDetails} userData={this.props.userDetails} />
            <hr />
            {!(this.props.userDetails && this.props.userDetails.isPrivate)
              ? <Posts /> : (
                <p>Private Profile</p>
              )}
          </>
        )}
      </LayoutContent>
    );
  }
}

Profile.defaultProps = {
  loading: false,
  error: null,
  userDetails: null,
};

Profile.propTypes = {
  fetchUserDetails: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  userDetails: PropTypes.object,
  clearProfileData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.profile.loading,
  error: state.profile.error,
  userDetails: state.profile.userDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserDetails: (username) => dispatch(fetchUserDetails(username)),
  clearProfileData: () => dispatch(clearData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
