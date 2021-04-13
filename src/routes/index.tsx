import React from 'react';
import { Switch } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Prova } from '../pages/Prova/Prova';
import { Route } from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Dashboard} />
    <Route path='/prova' component={Prova} />
  </Switch>
);

export default Routes;
