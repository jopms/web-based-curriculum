import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./pages/App";
import "./styles/scss/layout.scss";
import "./styles/css/styles.css";
import "./styles/scss/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
