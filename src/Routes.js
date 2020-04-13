import React, { Component } from 'react';

// Router Pkg
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

// Containers
import Login from './containers/Login';
import Register from './containers/Register';
import ResetPassword from './containers/ResetPassword';
import Feeds from './containers/Feeds';

// Not Found 404
import NotFound from './containers/NotFound';

// AuthHOC
import AfterLoginHOC from './middlewares/AfterLoginHOC';
import BeforeLoginHOC from './middlewares/BeforeLoginHOC';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Before Login which should be accessed who has not logged in */}
          <Route path="/" component={BeforeLoginHOC(Login)} exact />
          <Route path="/register" component={BeforeLoginHOC(Register)} exact />
          <Route path="/reset-password" component={BeforeLoginHOC(ResetPassword)} exact />

          {/* After Login Page which should be accessed only those who have logged in  */}
          <Route path="/feeds" component={AfterLoginHOC(Feeds)} exact />

          {/* Its Not Found Page */}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
