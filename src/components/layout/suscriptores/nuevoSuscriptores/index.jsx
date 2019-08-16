import React, { Component } from "react";
import {
  MDBIcon,
  MDBAnimation,
  MDBBtn,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBInput
} from "mdbreact";
import { Link } from "react-router-dom";
import Spiner from "../../spiner";
//import connect de react-redux-firebase
import { firestoreConnect } from "react-redux-firebase";

class NuevoSuscriptor extends Component {
  state = {
    activeItem: "1",
    nombre: "",
    apellido: "",
    codigo: "",
    carrera: ""
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  //agrega un nuevo suscriptor a la base de datos
  handSubmit = e => {
    e.preventDefault();
    const { nombre, apellido, codigo, carrera } = this.state;
    const nuevoSuscriptor = { apellido, carrera, codigo, nombre };
    const { firestore, history } = this.props;
    firestore.add({ collection: "suscriptores" }, nuevoSuscriptor).then(() => {
      history.push("/admin/suscriptores");
      console.log(nuevoSuscriptor);
    });
  };

  //funcion que extrae los valores de los input y los agrega al state
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { nombre, apellido, codigo, carrera } = this.state;
    return (
      <>
        <MDBAnimation type="fadeInLeft">
          <form onSubmit={this.handSubmit}>
            <Link to="/admin/suscriptores">
              <MDBBtn color="teal darken-4" size="sm" className="mb-4">
                <MDBIcon icon="arrow-circle-left" /> {""} Ver lista de
                Suscriptores
              </MDBBtn>
            </Link>
            <h1>
              <p>
                <MDBIcon icon="plus-circle" /> Nuevo Suscriptor
              </p>
            </h1>
            <MDBNav className="nav-tabs mt-5">
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  active={this.state.activeItem === "1"}
                  onClick={this.toggle("1")}
                  role="tab"
                >
                  Nombre
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  active={this.state.activeItem === "2"}
                  onClick={this.toggle("2")}
                  role="tab"
                >
                  Apellido
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  active={this.state.activeItem === "3"}
                  onClick={this.toggle("3")}
                  role="tab"
                >
                  Carrera
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  active={this.state.activeItem === "4"}
                  onClick={this.toggle("4")}
                  role="tab"
                >
                  Legajo
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.activeItem} className="w-25">
              <MDBTabPane tabId="1" role="tabpanel">
                <MDBInput
                  name="nombre"
                  label="nombre"
                  onChange={this.handleChange}
                  valueDefault={this.state.nombre}
                />
              </MDBTabPane>
              <MDBTabPane tabId="2" role="tabpanel">
                <MDBInput
                  name="apellido"
                  label="apellido"
                  onChange={this.handleChange}
                  valueDefault={this.state.apellido}
                />
              </MDBTabPane>
              <MDBTabPane tabId="3" role="tabpanel">
                <MDBInput
                  name="carrera"
                  label="Carrera"
                  onChange={this.handleChange}
                  valueDefault={this.state.carrera}
                />
              </MDBTabPane>
              <MDBTabPane tabId="4" role="tabpanel">
                <MDBInput
                  type="text"
                  name="codigo"
                  label="codigo"
                  onChange={this.handleChange}
                  valueDefault={this.state.codigo}
                />
              </MDBTabPane>
            </MDBTabContent>

            {nombre !== "" &&
            apellido !== "" &&
            codigo !== "" &&
            carrera !== "" ? (
              <button>Guardar informacion</button>
            ) : (
              <MDBAnimation type="fadeInLeft">
                <div className="text-center">
                  <p>Esperando el completado de datos</p>
                  <br />
                  <Spiner />
                </div>
              </MDBAnimation>
            )}
          </form>
        </MDBAnimation>
      </>
    );
  }
}
// conecto mi componente a react-redux-firebase para poder tener acceso por props a las acciones de firestore
export default firestoreConnect()(NuevoSuscriptor);
