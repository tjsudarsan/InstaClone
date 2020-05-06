import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Router Pkg
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

// Containers
import Login from './containers/Login';
import Register from './containers/Register';
import ResetPassword from './containers/ResetPassword';
import Feeds from './containers/Feeds';
import Profile from './containers/Profile';
import Settings from './containers/Settings';
import Search from './containers/Search';
import Notifications from './containers/Notifications';

// Not Found 404
import NotFound from './containers/NotFound';

// Loader
import Loader from './components/Loader';

// AuthHOC
import AfterLoginHOC from './middlewares/AfterLoginHOC';
import BeforeLoginHOC from './middlewares/BeforeLoginHOC';

// ActionCreators
import { validateAuthStatus } from './redux/actions/actions-auth';

class Routes extends Component {
  constructor(props) {
    super(props);

    props.validateAuthStatus();

    this.state = {
    };
  }

  render() {
    const { isLoggedIn, loading } = this.props;
    if (loading) {
      return (
        <Loader />
      );
    }
    return (
      <BrowserRouter>
        <Switch>
          {/* Before Login which should be accessed who has not logged in */}
          <Route path="/" component={BeforeLoginHOC(Login, isLoggedIn)} exact />
          <Route path="/register" component={BeforeLoginHOC(Register, isLoggedIn)} exact />
          <Route path="/reset-password" component={BeforeLoginHOC(ResetPassword, isLoggedIn)} exact />

          {/* After Login Page which should be accessed only those who have logged in  */}
          <Route path="/feeds" component={AfterLoginHOC(Feeds, isLoggedIn)} exact />
          <Route path="/settings" component={AfterLoginHOC(Settings, isLoggedIn)} exact />
          <Route path="/search" component={AfterLoginHOC(Search, isLoggedIn)} exact />
          <Route path="/notifications" component={AfterLoginHOC(Notifications, isLoggedIn)} exact />

          {/* Logout */}
          <Route
            path="/logout"
            render={() => {
              window.localStorage.clear();
              window.location = '/';
              return null;
            }}
            exact
          />

          {/* Its Not Found Page */}
          <Route path="/404" component={NotFound} exact />

          {/* Profile Page */}
          <Route path="/:username" component={AfterLoginHOC(Profile, isLoggedIn)} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

Routes.defaultProps = {
  isLoggedIn: false,
  loading: false,
};

Routes.propTypes = {
  isLoggedIn: PropTypes.bool,
  validateAuthStatus: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.auth.userData?.uid,
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  validateAuthStatus: () => dispatch(validateAuthStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
