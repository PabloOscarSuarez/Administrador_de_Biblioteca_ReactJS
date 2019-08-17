import React from "react";
import { Switch, Route } from "react-router-dom";
import Libros from "./Libros";
import MostrarLibro from "./mostrarLibro";
import NuevoLibro from "./nuevoLibro";
import PrestamoLibro from "./prestamoLibro";
import EditarLibro from "./editarLibro";

function RoutesLibro() {
  return (
    <Switch>
      <Route exact path="/" component={Libros} />
      <Route exact path="/libros/:id" component={MostrarLibro} />
      <Route exact path="/libros/nuevo" component={NuevoLibro} />
      <Route exact path="/libros/prestamo/:id" component={PrestamoLibro} />
      <Route exact path="/libros/editar/:id" component={EditarLibro} />
    </Switch>
  );
}

export default RoutesLibro;
