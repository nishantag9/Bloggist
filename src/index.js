import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./configuration/store";
import App from "./App";
import ToastContainer from "./components/notifications";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.min.css"

import "./styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
