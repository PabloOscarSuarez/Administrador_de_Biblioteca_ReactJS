import React, { Component } from "react";
//componentes
import SuscriptoresPage from "./Suscriptores";
import Spiner from "../../spiner";
//dependencia para conectar al store
import { compose } from "redux";
import { connect } from "react-redux";
//escucha las rutas de firestore
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class Suscriptores extends Component {
  //funcion que se encarga de eliminar los suscriptores con Firestore

  eliminarSuscriptor = id => {
    const { firestore } = this.props;

    firestore
      .delete({
        // collection suscriptores en la "tabla" donde se encuentra mis usuarios
        collection: "suscriptores",
        Astore: "suscriptor",
        doc: id
      })
      .then(data => console.log("esta es la data", data));
  };

  render() {
    const { suscriptores } = this.props;
    return suscriptores ? (
      <SuscriptoresPage
        suscriptores={suscriptores}
        eliminarSuscriptor={this.eliminarSuscriptor}
      />
    ) : (
      <Spiner />
    );
  }
}

Suscriptores.propTypes = {
  suscriptores: PropTypes.array,
  firestore: PropTypes.object.isRequired
};

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

//bien rapida explicacion utilizo firestoreConnect el cual segun la configuracion realizada en el store, recibe una path donde va a buscar la informacion que se necesita, en este caso busca suscriptores en la base de dato creado en Firestore Cloud, a su vez es  una funcion de orden superior lo cual me facilita recibir por props los distintos metodos de Firestore :)
