import React, { Component, Fragment } from "react";
import MostrarSuscriptorPage from "./MostrarSuscriptor";
//import connect de react-redux-firebase
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
//---------

import Spiner from "../../spiner";

class MostrarSuscriptor extends Component {
  render() {
    const { suscriptor } = this.props;

    return suscriptor ? (
      <MostrarSuscriptorPage suscriptor={suscriptor} />
    ) : (
      <Spiner />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  suscriptor:
    state.firestore.ordered.suscriptor && state.firestore.ordered.suscriptor[0] // como lo que recibo es un array ejecuto de 1 elemento directamente lo saco con la [0] para usarlo directo por props
});

export default compose(
  firestoreConnect(props => [
    {
      collection: "suscriptores", // esta es la coleccion de mi base de dato
      storeAs: "suscriptor", //creo un Alias para mi Suscriptor evito que se pise con mi collection de suscriptores
      doc: props.match.params.id //ejecuto la accion de ir a pedir la informacion basado en el ID
    }
  ]),
  connect(
    mapStateToProps,
    null
  )
)(MostrarSuscriptor);
