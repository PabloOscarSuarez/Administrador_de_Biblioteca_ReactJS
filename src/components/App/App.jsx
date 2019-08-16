import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// importo el controlador de rutas de suscriptores
import RoutesSuscriptores from "../layout/suscriptores/routesContainer";

//import pagina generia si no ingreso a una ruta correcta
import Nofound from "../layout/noFound";
import Navbar from "../layout/Navbar/";

import { MDBContainer } from "mdbreact";

function RoutesContainer() {
  return (
    <Fragment>
      <Navbar />
      <MDBContainer className="mt-5">
        <Switch>
          <Route path="/admin" render={() => <RoutesSuscriptores />} />
          <Route component={Nofound} />
        </Switch>
      </MDBContainer>
    </Fragment>
  );
}

export default RoutesContainer;
