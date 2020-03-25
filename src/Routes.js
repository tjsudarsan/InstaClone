import React, { Component } from 'react';

// Router Pkg
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Containers
import Login from './containers/Login';
import Register from './containers/Register';

// Not Found 404
import NotFound from './containers/NotFound';

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
          <Route path="/" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
