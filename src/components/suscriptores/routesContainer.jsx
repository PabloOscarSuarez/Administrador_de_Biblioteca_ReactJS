import React from "react";
import { Switch, Route } from "react-router-dom";

//Import componentes de suscriptores
import EditarSuscriptores from "./editarSuscriptores";
import MostrarSuscriptores from "./mostrarSuscriptores";
import NuevoSuscriptores from "./nuevoSuscriptores";
import Suscriptores from "./Suscriptores";

function componentName() {
  return (
    <>
      <Switch>
        <Route exact path="/suscriptores" component={Suscriptores} />
        <Route exact path="/suscriptores/nuevo" component={NuevoSuscriptores} />
        <Route
          exact
          path="/suscriptores/editar"
          component={EditarSuscriptores}
        />
        <Route
          exact
          path="/suscriptores/mostrar"
          component={MostrarSuscriptores}
        />
      </Switch>
    </>
  );
}

export default componentName;
