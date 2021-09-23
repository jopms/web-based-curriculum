import React from "react";
import Home from "./Home";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="main-wrapper default">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          
        </Switch>
      </div>
    </Router>
  );
};

export default App;
