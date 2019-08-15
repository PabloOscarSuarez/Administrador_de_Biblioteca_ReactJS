import React, { Component } from "react";
import SuscriptoresPage from "./Suscriptores";
//dependencia para conectar al store
import { compose } from "redux";
import { connect } from "react-redux";
//escucha las rutas de firestore
import { firestoreConnect } from "react-redux-firebase";

class Suscriptores extends Component {
  render() {
    const { suscriptores } = this.props;
    return suscriptores ? <SuscriptoresPage /> : <h1>Cargando informacion</h1>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  suscriptores: state.firestore.ordered.suscriptores
});

export default compose(
  firestoreConnect([{ collection: "suscriptores" }]),
  connect(
    mapStateToProps,
    null
  )
)(Suscriptores);

//bien rapida explicacion utilizo firestoreConnect el cual segun la configuracion realizada en el store, recibe una path donde va a buscar la informacion que se necesita, en este caso busca suscriptores en la base de dato creado en Firestore Cloud
