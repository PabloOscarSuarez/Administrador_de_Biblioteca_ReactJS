import React, { Component } from "react";
import PrestamoLibroPage from "./PrestamoLibro";

//import connect de react-redux-firebase
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
//---------
import { guardarUsuario } from "../../../../redux/actions/buscarUsuarioActions";

import Spiner from "../../spiner";

class PrestamoLibro extends Component {
  state = {
    noResultados: false,
    busqueda: ""
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

        this.props.suscriptor("");

        // actualizar el state en base a si hay resultados
        this.setState({
          noResultados: true
        });
      } else {
        // si hay resultados
        // colocar el resultado en el state de Redux
        const datos = resultado.docs[0].data();

        this.props.suscriptor(datos);

        // actualizar el state en base a si hay resultados
        this.setState({
          noResultados: false
        });
      }
    });
  };

  solicitarPrestamo = () => {
    const { datosSuscriptor } = this.props;

    // fecha de alta
    datosSuscriptor.fecha_solicitud = new Date().toLocaleDateString();

    // No se pueden mutar los pros, tomar una copia y crear un arreglo nuevo
    let prestado = [];
    prestado = [...this.props.libro.prestado, datosSuscriptor];

    // Copiar el objeto y agregar los prestados
    const libro = { ...this.props.libro };

    // asignar los prestados
    libro.prestado = prestado;

    // extraer firestore
    const { firestore, history } = this.props;

    // almacenar en la BD
    firestore
      .update(
        {
          collection: "libros",
          doc: libro.id
        },
        libro
      )
      .then(() => {
        this.props.suscriptor("");
        return history.push("/");
      });
  };
  leerDato = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { datosSuscriptor } = this.props;
    const { libro } = this.props;

    return libro ? (
      <PrestamoLibroPage
        libro={libro}
        leerDato={this.leerDato}
        buscarAlumno={this.buscarAlumno}
        resultadoAlumnos={datosSuscriptor}
        solicitarPrestamo={this.solicitarPrestamo}
      />
    ) : (
      <Spiner />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  libro: state.firestore.ordered.libro && state.firestore.ordered.libro[0],
  datosSuscriptor: state.usuario.resultado
  // como lo que recibo es un array  de 1 elemento directamente lo saco con la [0] para usarlo directo por props
});

const mapDispatchToProps = dispatch => {
  return {
    suscriptor: data => {
      dispatch(guardarUsuario(data));
    }
  };
};

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
    mapDispatchToProps
  )
)(PrestamoLibro);
