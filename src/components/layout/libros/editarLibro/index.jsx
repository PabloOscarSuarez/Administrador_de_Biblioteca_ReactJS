import React, { Component } from "react";
import EditarLibroPage from "./EditarLibro";
//import connect de react-redux-firebase
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
//---------

import Spiner from "../../spiner";

class EditarLibro extends Component {
  state = {
    ISBN: this.props.libro.ISBN,
    editorial: this.props.libro.editorial,
    existencia: this.props.libro.existencia,
    titulo: this.props.libro.titulo
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  //activa el action de firestore para modificar en la base libros
  handleSubmit = e => {
    e.preventDefault();
    //extraigo firestore y history de props
    const { firestore, history, libro } = this.props;
    const { ISBN, editorial, existencia, titulo } = this.state;
    const LibroEditado = { ISBN, editorial, existencia, titulo };
    //ejecuto el action de firestore
    firestore
      .update({ collection: "libros", doc: libro.id }, LibroEditado)
      .then(history.push("/"));
  };
  render() {
    const { libro } = this.props;
    return libro ? (
      <EditarLibroPage
        libro={libro}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    ) : (
      <Spiner />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  libro: state.firestore.ordered.libro && state.firestore.ordered.libro[0] // como lo que recibo es un array ejecuto de 1 elemento directamente lo saco con la [0] para usarlo directo por props
});

export default compose(
  firestoreConnect(props => [
    {
      collection: "libros", // esta es la coleccion de mi base de dato
      storeAs: "libro", //creo un Alias para mi libro evito que se pise con mi collection de suscriptores y se vuelva a pedir
      doc: props.match.params.id //ejecuto la accion de ir a pedir la informacion basado en el ID
    }
  ]),
  connect(
    mapStateToProps,
    null
  )
)(EditarLibro);
