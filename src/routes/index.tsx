  
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Route
import PrivateRoute from './PrivateRoute';

// Pages
import Main from '../pages/Main';
import Login from '../pages/Login';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' component={Main} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;