import React, { Component } from "react";
import PrestamoLibroPage from "./PrestamoLibro";

//import connect de react-redux-firebase
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
//---------

import Spiner from "../../spiner";

class PrestamoLibro extends Component {
  state = {
    noResultados: false,
    busqueda: "",
    resultado: { datos: "nada" }
  };

  buscarAlumno = e => {
    e.preventDefault();

    // obtener el valor a buscar
    const { busqueda } = this.state;

    // extraer firestore
    const { firestore } = this.props;

    // hacer la consulta
    const coleccion = firestore.collection("suscriptores");
    const consulta = coleccion.where("codigo", "==", busqueda).get();

    // leer los resultados
    consulta.then(resultado => {
      if (resultado.empty) {
        // no hay resultados

        // almacenar en redux un objeto vacio // proximo a modificar
        this.setState({ resultado: {} });

        // actualizar el state en base a si hay resultados
        this.setState({
          noResultados: true
        });
      } else {
        // si hay resultados
        // colocar el resultado en el state de Redux proximo a corregir
        const datos = resultado.docs[0].data();

        this.setState({ resultado: datos });

        // actualizar el state en base a si hay resultados
        this.setState({
          noResultados: false
        });
      }
    });
  };
  leerDato = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { resultado } = this.state;
    const { libro } = this.props;

    return libro ? (
      <PrestamoLibroPage
        libro={libro}
        leerDato={this.leerDato}
        buscarAlumno={this.buscarAlumno}
        resultadoAlumnos={resultado}
      />
    ) : (
      <Spiner />
    );
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
)(PrestamoLibro);
