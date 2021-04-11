import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from "../About/AboutMain"
import Passion from "../Passion/PassionMain"
const AboutPage = () => {

const location = {
  about: '/about',
  passion: '/passion',
}
  return (
    <div className="container-fluid">
        <Router>
          <Switch>
            <Route exact path={location.about} component={About}/>
            <Route exact path={location.passion} component={Passion}/>
          </Switch>
        </Router>
    </div>
  );
};

export default AboutPage;
