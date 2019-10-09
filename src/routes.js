import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Billing from './pages/billing';
import history from './history';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Billing} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
