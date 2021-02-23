import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Routes from '../components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from '../store/store';
import { loadUser } from '../features/auth/actions/auth';
import setAuthToken from '../utils/setAuthToken';
import { LOGOUT } from '../features/auth/actions/types';

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    
    <Provider store={store}>
      <Router>
        <Fragment>
          {/* <h1>Hello, world. If you want to login <Link to="/login">click here</Link></h1> */}
          <Switch>
             <Route component={Routes} /> 
          </Switch>
        </Fragment>
      </Router>
    </Provider>

  );
};

export default App;
