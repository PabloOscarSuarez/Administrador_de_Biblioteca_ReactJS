import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// importo el controlador de rutas de suscriptores
import RoutesSuscriptores from "../layout/suscriptores/routesContainer";

//import pagina generia si no ingreso a una ruta correcta
import Nofound from "../layout/noFound";
import Navbar from "../layout/Navbar/"

function RoutesContainer() {
  return (
    <Fragment>
      <Navbar/>
      <Switch>
        <Route path="/admin" render={() => <RoutesSuscriptores />} />  
        <Route component={Nofound}/>
              
      </Switch>
    </Fragment>
  );
}

export default RoutesContainer;
