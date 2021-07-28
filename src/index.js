import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundaryComponent from "./Components/ErrorBoundaryComponent.js"
import { BrowserRouter } from "react-router-dom";
// import "jquery/dist/jquery.min.js";
// import "popper.js/dist/umd/popper.min.js";
// import "bootstrap/js/dist/dropdown";
// C:\Users\dilip\first-react-app\node_modules\bootstrap\js\dist\dropdown.js
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ErrorBoundaryComponent>
    <App />
    </ErrorBoundaryComponent>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
