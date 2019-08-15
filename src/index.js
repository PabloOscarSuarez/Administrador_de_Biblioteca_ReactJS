// importar los estilos
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.jsx";

import { BrowserRouter as Route } from "react-router-dom";

ReactDOM.render(
  <Route>
    <App />
  </Route>,
  document.getElementById("root")
);
