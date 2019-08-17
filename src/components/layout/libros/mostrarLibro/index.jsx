import React, { Component } from "react";
import MostrarLibroPage from "./MostrarLibro";

//import connect de react-redux-firebase
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
//---------

import Spiner from "../../spiner";

class MostrarLibro extends Component {
  render() {
    const { libro } = this.props;

    return libro ? <MostrarLibroPage libro={libro} /> : <Spiner />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  libro: state.firestore.ordered.libro && state.firestore.ordered.libro[0] // como lo que recibo es un array  de 1 elemento directamente lo saco con la [0] para usarlo directo por props
});

export default compose(
  firestoreConnect(props => [
    {
      collection: "libros", // esta es la coleccion de mi base de dato
      storeAs: "libro", //creo un Alias para mi libro evito que se pise con mi collection de libros
      doc: props.match.params.id //ejecuto la accion de ir a pedir la informacion basado en el ID
    }
  ]),
  connect(
    mapStateToProps,
    null
  )
)(MostrarLibro);
