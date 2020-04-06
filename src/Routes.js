import React, { Component } from 'react';

// Router Pkg
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

// Containers
import Login from './containers/Login';
import Register from './containers/Register';
import Feeds from './containers/Feeds';

// Not Found 404
import NotFound from './containers/NotFound';

// AuthHOC
import AuthHOC from './middlewares/AuthHOC';

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
          <Route path="/" component={AuthHOC(Login, '/')} exact />
          <Route path="/register" component={AuthHOC(Register, '/register')} exact />
          <Route path="/feeds" component={AuthHOC(Feeds, '/feeds')} exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
