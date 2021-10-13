import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Error404 from '../pages/Error404';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route component={Error404} />
  </Switch>
);

export default Routes;
