import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import Questionaire from '../containers/questionaire/Questionaire'
import Orders from '../containers/orders/Orders'
import HomepageLayout from '../components/semantic_ui/HomepageLayout/HomepageLayout'
import ResponsiveLayout from '../components/semantic_ui/ResponsiveLayout/ResponsiveLayout1'
import ResponsiveLayout2 from '../components/semantic_ui/ResponsiveLayout/ResponsiveLayout2'
import HeroSections from './herosections/HeroSections'
import './App.css';



import Dialog from '../components/auth/register/dialog/Dialog';
const App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/homepagelayout' component={HomepageLayout} />
          <Route exact path='/responsivelayout' component={ResponsiveLayout} />
          <Route exact path='/responsivelayout2' component={ResponsiveLayout2} />
          <Route exact path='/herosections' component={HeroSections} />
          <Route exact path='/questionaire' component={Questionaire} />
          <Route exact path='/orders' component={Orders} />
          <Dialog />
          <Route exact path='/auth' component={Dialog} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
