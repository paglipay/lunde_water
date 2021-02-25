import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';

import Login from '../../features/auth/login/form/Login';
import Profile from '../../features/profile/Profile';

const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/profile' component={Profile} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
