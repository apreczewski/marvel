import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    {/* <Route path="/" exact component={SignIn} /> */}
    {/* <Route path="/signup" component={SignUp} /> */}
    <Route path="/" component={Home} exact />
    <Route path="/home" component={Home} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
