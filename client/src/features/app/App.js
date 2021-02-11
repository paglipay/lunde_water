import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  return (
    <Router>
      <Fragment>
        <h1>Hello World</h1>
      </Fragment>
    </Router>

  );
}

export default App;
