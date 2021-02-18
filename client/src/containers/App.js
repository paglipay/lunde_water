import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import Questionaire from '../containers/questionaire/Questionaire'
<<<<<<< HEAD
import Orders from '../containers/orders/OrderForm'
import HomepageLayout from '../components/semantic_ui/HomepageLayout/HomepageLayout'
=======
import Orders from '../containers/orders/Orders'
>>>>>>> 64e56faa4a311cbafcce1598882316d9455fc066
import './App.css';



const App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          {/* Routes go here */}
          <Route exact path={["/questionaire"]}>
<<<<<<< HEAD
              <Questionaire />
            </Route>        
          <Route exact path={["/orders"]}>
              <Orders />
          </Route>       
          <Route exact path={["/homepagelayout"]}>
              <HomepageLayout />
=======
            <Questionaire />
          </Route>
          <Route exact path={["/orders"]}>
            <Orders />
>>>>>>> 64e56faa4a311cbafcce1598882316d9455fc066
          </Route>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
