import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import Questionaire from '../features/questionaire/Questionaire';
import Questionaire2 from '../features/questionaire/Questionaire2';
import Register from '../features/register/Register';
import Login from '../features/register/Login';
import Profile from '../features/profile/Profile';
import Orders from '../features/orders/Orders';
import OrderForm from '../features/orderform/OrderForm';
import Services from '../features/services/Services';
import HomepageLayout from '../components/semantic_ui/HomepageLayout/HomepageLayout';
import ResponsiveLayout from '../components/semantic_ui/ResponsiveLayout/ResponsiveLayout1';
import ResponsiveLayout2 from '../components/semantic_ui/ResponsiveLayout/ResponsiveLayout2';
import DTF from '../components/DynamicTable/DynamicTableForm';
import HeroSections from '../features/herosections/HeroSections';
// import './App.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import { loadUser } from '../features/register/redux/actions/actions';
import setAuthToken from '../utils/setAuthToken';
import { LOGOUT } from '../features/register/redux/actions/types';


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
          <NavBar />
          <div style={{ minHeight: "75vh" }}>
            <Switch >
              <Route exact path='/homepagelayout' component={HomepageLayout} />
              <Route exact path='/responsivelayout' component={ResponsiveLayout} />
              <Route exact path='/responsivelayout2' component={ResponsiveLayout2} />
              <Route exact path='/herosections' component={HeroSections} />
              <Route exact path='/questionaire' component={Questionaire} />
              <Route exact path='/questionaire2' component={Questionaire2} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/orderform' component={OrderForm} />
              <Route exact path='/orders' component={Orders} />
              <Route exact path='/services' component={Services} />
              <Route exact path='/dtf' component={DTF} />
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
