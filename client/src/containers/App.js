import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Fragment>
        <div>
          <h1>Hello, world</h1>
        </div>
        <Switch>
          {/* Routes go here */}
          <Route />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
