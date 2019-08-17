import React, { Component, Fragment } from "react";
import EditarSuscriptorPage from "./EditarSuscriptores";
//import connect de react-redux-firebase
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
//---------

import Spiner from "../../spiner";

class EditarSuscriptor extends Component {
  state = {
    nombre: this.props.suscriptor.nombre,
    apellido: this.props.suscriptor.apellido,
    codigo: this.props.suscriptor.codigo,
    carrera: this.props.suscriptor.carrera
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  //activa el action de firestore para modificar en la base usuarios
  handleSubmit = e => {
    e.preventDefault();
    //extraigo firestore y history de props
    const { firestore, history, suscriptor } = this.props;
    const { nombre, apellido, codigo, carrera } = this.state;
    const suscriptorEditado = { apellido, carrera, codigo, nombre };
    //ejecuto el action de firestore
    firestore
      .update(
        { collection: "suscriptores", doc: suscriptor.id },
        suscriptorEditado
      )
      .then(history.push("/admin/suscriptores"));
  };
  render() {
    const { suscriptor } = this.props;

    return suscriptor ? (
      <EditarSuscriptorPage
        suscriptor={suscriptor}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
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
)(EditarSuscriptor);
