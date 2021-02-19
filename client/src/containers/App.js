import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dialog from '../components/auth/register/dialog/Dialog';
const App = () => {
  return (
    <Router>
      <Fragment>
        <div>
          <h1>Hello, world</h1>
        </div>
        <Dialog/>
        <Switch>
          <Route path = '/auth' component={Dialog} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
