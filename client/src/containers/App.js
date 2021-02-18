import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import Questionaire from '../containers/questionaire/Questionaire'
import Orders from '../containers/orders/Orders'
import './App.css';



const App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          {/* Routes go here */}
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
