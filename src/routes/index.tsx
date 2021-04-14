import React from 'react';
import { Switch } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Exam } from '../pages/Exam/Exam';
import { Route } from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Dashboard} />
    <Route path='/prova' component={Exam} />
  </Switch>
);

export default Routes;
