import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App = () => {
  return (
    <Router>
      <div className="main-wrapper default">
        <Header />
        <Footer />
        <div className="main-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
