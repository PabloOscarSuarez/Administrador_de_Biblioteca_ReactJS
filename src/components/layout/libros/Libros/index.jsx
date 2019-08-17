import React, { Component } from "react";
import LibrosPage from "./Libros";
//componentes
import Spiner from "../../spiner";
//dependencia para conectar al store
import { compose } from "redux";
import { connect } from "react-redux";
//escucha las rutas de firestore
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class Libros extends Component {
  //funcion que se encarga de eliminar los libros con Firestore

  eliminarLibro = id => {
    const { firestore } = this.props;

    firestore
      .delete({
        // collection libros en la "tabla" donde se encuentra mis libros
        collection: "libros",
        Astore: "libro",
        doc: id
      })
      .then(data => console.log("esta es la data", data));
  };

  render() {
    const { libros } = this.props;
    return libros ? (
      <LibrosPage libros={libros} eliminarLibro={this.eliminarLibro} />
    ) : (
      <Spiner />
    );
  }
}

Libros.propTypes = {
  libros: PropTypes.array,
  firestore: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  libros: state.firestore.ordered.libros
});

export default compose(
  firestoreConnect([{ collection: "libros" }]),
  connect(
    mapStateToProps,
    null
  )
)(Libros);
