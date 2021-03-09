import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import Questionaire from '../features/questionaire/Questionaire'
import Questionaire2 from '../features/questionaire/Questionaire2'
import Register from '../features/register/Register'
// import Profile from '../features/profile/Profile'
import Profile from '../features/profile/Profile'
import ReviewComplete from '../features/profile/Profile'
import Orders from '../features/orders/Orders'
import OrderForm from '../features/orderform/OrderForm'
import Services from '../features/services/Services'
import HomepageLayout from '../components/semantic_ui/HomepageLayout/HomepageLayout'
import ResponsiveLayout from '../components/semantic_ui/ResponsiveLayout/ResponsiveLayout1'
import ResponsiveLayout2 from '../components/semantic_ui/ResponsiveLayout/ResponsiveLayout2'
import DTF from '../components/DynamicTable/DynamicTableForm'
import HeroSections from '../features/herosections/HeroSections'
import Invoice from '../features/invoice/Invoice'
// import './App.css';
import { Provider } from 'react-redux'
import store from '../store/store'

// import Dialog from '../components/auth/register/dialog/Dialog';
const App = () => {
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
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/reviewcomplete' component={ReviewComplete} />
              <Route exact path='/orderform' component={OrderForm} />
              <Route exact path='/orders' component={Orders} />
              <Route exact path='/services' component={Services} />
              <Route exact path='/dtf' component={DTF} />
              <Route exact path='/invoice' component={Invoice} />
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
