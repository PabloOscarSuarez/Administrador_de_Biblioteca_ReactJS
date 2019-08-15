// importar los estilos
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.jsx";

import { BrowserRouter as Route } from "react-router-dom";

//importo la magia del store de firebase "./redux/store"
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Route>
      <App />
    </Route>
  </Provider>,
  document.getElementById("root")
);
