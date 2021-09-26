import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../features/theme/themeSlicer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    dispatch(changeTheme(theme));
  }, [dispatch]);

  useEffect(() => {
    const main = document.getElementById("main");

    if (main.className.includes(theme)) {
      return;
    } else {
      main.className.includes("light")
        ? toggleDarkMode(main, "light", "dark")
        : toggleDarkMode(main, "dark", "light");
    }
  }, [theme]);

  const toggleDarkMode = (element, remove, add) => {
    element.classList.remove(remove);
    element.classList.add(add);
  };

  return (
    <Router>
      <div id="main" className="main-wrapper light">
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
