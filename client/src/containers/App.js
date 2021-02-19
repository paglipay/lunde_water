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



const App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          {/* Routes go here */}
          <Route exact path={["/homepagelayout"]}>
            <HomepageLayout />
          </Route>
          <Route exact path={["/responsivelayout"]}>
            <ResponsiveLayout />
          </Route>
          <Route exact path={["/responsivelayout2"]}>
            <ResponsiveLayout2 />
          </Route>
          <Route exact path={["/herosections"]}>
            <HeroSections />
          </Route>
          <Route exact path={["/questionaire"]}>
            <Questionaire />
          </Route>
          <Route exact path={["/orders"]}>
            <Orders />
          </Route>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
